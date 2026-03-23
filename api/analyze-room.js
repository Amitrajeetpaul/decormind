export default function handler(req, res) {
  if (req.method === 'POST') {
    const scores = {
      lighting: Math.floor(Math.random() * 20) + 75,
      space: Math.floor(Math.random() * 20) + 65,
      color: Math.floor(Math.random() * 20) + 80,
      vastu: Math.floor(Math.random() * 20) + 70
    };
    res.status(200).json(scores);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
