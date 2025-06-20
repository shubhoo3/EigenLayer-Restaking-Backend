const restakersService = require('../services/restakersService');

exports.getRestakers = async (req, res) => {
  try {
    const data = await restakersService.fetchRestakers(req.db);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch restakers' });
  }
};