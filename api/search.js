// api/search.js
export default async function handler(req, res) {
  const { q } = req.query;
  const url = `https://query1.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(q)}&quotesCount=10&newsCount=0`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
