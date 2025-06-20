# EigenLayer Restaking Info API

A Node.js backend service that aggregates and exposes EigenLayer restaking data. It simulates fetching from on-chain/subgraph sources and provides three key endpoints for restakers, validators, and rewards.


## 📌 Features

- Built with Node.js and Express.js
- Uses SQLite for storage
- Mock data to simulate EigenLayer restaking behavior
- Three REST API endpoints

## 📁 Folder Structure
```
├── data/                      # SQLite database location
│   └── eigenlayer.db          # SQLite DB file (auto-generated)
├── scripts/                   # DB initialization and seeding
│   ├── initDb.js              # Creates DB tables
│   └── seedDb.js              # Inserts mock data
├── src/
│   ├── app.js                 # Main Express app
│   ├── routes/                # Route handlers
│   │   └── index.js
│   ├── controllers/           # API controller logic
│   │   ├── restakersController.js
│   │   ├── validatorsController.js
│   │   └── rewardsController.js
│   └── services/              # Database query logic
│       ├── restakersService.js
│       ├── validatorsService.js
│       └── rewardsService.js
└── package.json
```

## 🚀 Setup & Run

### 1. Install dependencies
  npm install

### 2. Add a custom scripts
  "scripts": {
  "start": "node src/app.js",
  "init-db": "node scripts/initDb.js",
  "seed-db": "node scripts/seedDb.js",
  "dev": "npm run init-db && npm run seed-db && npm start"
}

npm run dev 

Server will run on: `http://localhost:3000`

## 📡 API Endpoints

### `GET /api/restakers`
Returns list of restakers and their stETH amount + validator

### `GET /api/validators`
Returns validator info: operator, total delegated, status, slash history

### `GET /api/rewards/:address`
Returns total rewards for a wallet, including breakdown per validator

## 📄 Assumptions
- Data is mocked using seed script
- Rewards and slashing are stored as structured strings or arrays in SQLite
- This setup simulates an API aggregating from on-chain or subgraph sources

## 🧑‍💻 Tech Stack
- Node.js + Express
- SQLite3
- Postman (for testing)

## ✅ Example Queries in Postman
- `GET http://localhost:3000/api/restakers`
- `GET http://localhost:3000/api/validators`
- `GET http://localhost:3000/api/rewards/0xabc123...`

## Screenshots

![image](https://github.com/user-attachments/assets/7292546a-50e2-4f22-90a5-20bf1ef63f7b)

![image](https://github.com/user-attachments/assets/ebb0f23a-aa59-4f71-a100-4c8883765b43)

![image](https://github.com/user-attachments/assets/df9e5fdd-2ae2-4ede-abdf-97d23e3d4efb)

![image](https://github.com/user-attachments/assets/4ec56a84-b5fe-4184-8087-2983a6608953)
