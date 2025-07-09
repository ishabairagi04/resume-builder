const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');

const authMiddleware = require('../middlewares/authMiddleware');
router.use(authMiddleware);

router.get('/',  getProfile);
router.put('/', updateProfile);

module.exports = router; 