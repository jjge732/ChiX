const router = require('express').Router();
const index = require('../../controller');

router.route('/').get(index.find);
module.exports = router;