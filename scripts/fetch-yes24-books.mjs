import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dataPath = path.join(root, 'src', 'data', 'yes24-books.json');
const apiKey = process.env.YES24_API_KEY;

const books = JSON.parse(await fs.readFile(dataPath, 'utf8'));

if (!apiKey) {
  console.log('[YES24] YES24_API_KEY not set. Keeping fallback book data.');
  process.exit(0);
}

function normalise(value = '') {
  return value.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
}

async function searchBook(book) {
  const params = new URLSearchParams({
    query: book.title,
    category: 'BOOK',
    page: '1',
    pageSize: '10',
    detail: 'Y',
  });

  const response = await fetch(`https://apis.yes24.com/v1/goods/itemList?${params}`, {
    headers: { 'X-Api-Key': apiKey },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const payload = await response.json();
  if (!payload.success || !payload.data?.items?.length) return null;

  const target = normalise(book.title);
  const candidate = payload.data.items
    .map(item => ({
      item,
      score: normalise(item.title) === target ? 100 : normalise(item.title).includes(target) || target.includes(normalise(item.title)) ? 70 : 0,
    }))
    .sort((a, b) => b.score - a.score)[0];

  return candidate?.score > 0 ? candidate.item : payload.data.items[0];
}

let updated = 0;
for (const book of books) {
  try {
    const item = await searchBook(book);
    if (!item) {
      console.log(`[YES24] No result: ${book.title}`);
      continue;
    }

    book.yes24Id = String(item.itemId);
    book.yes24Link = item.link;
    book.cover = item.cover;
    book.price = item.salePrice ?? item.shopPrice ?? book.price;
    book.publisher = item.publisher || book.publisher;
    book.author = item.author || book.author;
    book.source = 'yes24-api';
    if (item.starScore) book.rating = item.starScore;
    updated += 1;
    console.log(`[YES24] Updated: ${book.title}`);
  } catch (error) {
    console.warn(`[YES24] Kept fallback for ${book.title}: ${error.message}`);
  }
}

await fs.writeFile(dataPath, `${JSON.stringify(books, null, 2)}\n`, 'utf8');
console.log(`[YES24] ${updated}/${books.length} book covers updated.`);
