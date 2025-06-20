const express = require('express');
const router = express.Router();

const restakersController = require('../controllers/restakersController');
const validatorsController = require('../controllers/validatorsController');
const rewardsController = require('../controllers/rewardsController');

router.get('/restakers', restakersController.getRestakers);
router.get('/validators', validatorsController.getValidators);
router.get('/rewards/:address', rewardsController.getRewards);

module.exports = router;