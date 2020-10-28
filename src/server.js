const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const Images = [];


app.get('/images', (req, res) => {
  res.json(Images);
});

app.post('/images', upload.single('image'), (req, res) => {
  // save data to db
  Images.push({
    name: req.body.name,
    image: req.file.buffer.toString('base64')
  });
  res.end();
})

app.listen('8080');