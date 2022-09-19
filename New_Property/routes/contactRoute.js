const { Router } = require('express');
const router = Router();
const contactController = require('../controllers/contactController');

router.get('/contact/limci', contactController.letsgo);

module.exports = router;
