import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.get('/sum', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);

  res.send(String(sum))
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
