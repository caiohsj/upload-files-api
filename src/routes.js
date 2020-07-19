const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

routes.get('/', (req, res) => {res.send()});
routes.post('/', multer(multerConfig).single('file'), (req, res) => {
  console.log(req.file);
  res.send();
});

module.exports = routes;