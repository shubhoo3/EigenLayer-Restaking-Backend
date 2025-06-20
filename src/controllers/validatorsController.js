const validatorsService = require('../services/validatorsService');

exports.getValidators = async (req, res) => {
  try {
    const data = await validatorsService.fetchValidators(req.db);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch validators' });
  }
};
