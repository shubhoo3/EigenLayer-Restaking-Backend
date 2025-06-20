const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/eigenlayer.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS restakers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT,
    amountRestaked TEXT,
    validator TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS validators (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    operator TEXT,
    totalDelegated TEXT,
    status TEXT,
    slashHistory TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS rewards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    wallet TEXT,
    validator TEXT,
    amount INTEGER,
    timestamp TEXT
  )`);

  console.log("Database and tables created.");
});

db.close();