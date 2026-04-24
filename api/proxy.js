export default async function handler(req, res) {
  const { ticker, market } = req.query;
  const symbol = market === 'KR' ? `${ticker}.KS` : ticker;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed' });
  }
}