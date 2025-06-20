const rewardsService = require('../services/rewardsService');

exports.getRewards = async (req, res) => {
  try {
    const { address } = req.params;
    const data = await rewardsService.fetchRewards(req.db, address);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rewards' });
  }
};
