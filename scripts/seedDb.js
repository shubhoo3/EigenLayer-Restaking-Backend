const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/eigenlayer.db');

db.serialize(() => {
  db.run("DELETE FROM restakers");
  db.run("DELETE FROM validators");
  db.run("DELETE FROM rewards");

  db.run(`INSERT INTO restakers (user, amountRestaked, validator) VALUES 
    ('0xabc123...', '120', '0xval1...'),
    ('0xdef456...', '300', '0xval2...')
  `);

  db.run(`INSERT INTO validators (operator, totalDelegated, status, slashHistory) VALUES 
    ('0xval1...', '10000', 'active', '[{"timestamp":"2024-04-01","amount":"50","reason":"downtime"}]'),
    ('0xval2...', '5000', 'active', '[]')
  `);

  db.run(`INSERT INTO rewards (wallet, validator, amount, timestamp) VALUES 
    ('0xabc123...', '0xval1...', 300, '2024-02-01'),
    ('0xabc123...', '0xval1...', 200, '2024-03-01'),
    ('0xdef456...', '0xval2...', 100, '2024-01-01')
  `);

  console.log("Mock data inserted.");
});

db.close();
