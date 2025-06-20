exports.fetchValidators = (db) => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM validators', [], (err, rows) => {
        if (err) return reject(err);
        resolve(rows.map(row => ({
          ...row,
          slashHistory: JSON.parse(row.slashHistory || '[]')
        })));
      });
    });
  };