const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json({type: 'application/*+json'}));

const Images = [];


app.get('/images', (req, res) => {
  res.json(Images);
});

app.post('/images', (req, res) => {
  // save data to db
  Images.push(req.body.image);
  res.end();
})

app.listen('8080');