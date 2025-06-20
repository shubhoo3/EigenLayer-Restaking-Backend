exports.fetchRewards = (db, address) => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM rewards WHERE wallet = ?', [address], (err, rows) => {
        if (err) return reject(err);
  
        const total = rows.reduce((acc, row) => acc + row.amount, 0);
        const byValidator = rows.reduce((acc, row) => {
          const found = acc.find(v => v.validator === row.validator);
          if (found) {
            found.reward += row.amount;
            found.timestamps.push(row.timestamp);
          } else {
            acc.push({ validator: row.validator, reward: row.amount, timestamps: [row.timestamp] });
          }
          return acc;
        }, []);
  
        resolve({ wallet: address, totalRewards: `${total} stETH`, byValidator });
      });
    });
  };
  