const express = require('express');
const routes = require('./routes');
const sqlite3 = require('sqlite3').verbose();   
const path = require('path');
const app = express();

const dbPath = path.join(__dirname, '../data/eigenlayer.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the eigenlayer database.');
  }
});
app.set('db', db);

app.use(express.json());
app.use('/api', (req, res, next) => {
    req.db = db;
    next();
}, routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;