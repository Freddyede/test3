import express from 'express';

const app = express();

app.get('/', (_req, res) => res.status(200).json({message: 'Ca marche et encore et encore test et encore et encore et encore et encore. test et encore un nouveau test 235678910', status: res.statusCode}));

app.listen(3000);