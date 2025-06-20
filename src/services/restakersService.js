exports.fetchRestakers = (db) => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM restakers', [], (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  };
  