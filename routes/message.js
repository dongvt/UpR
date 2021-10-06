const express = require('express');

const messageController = require('../controllers/message');

const router = express.Router();

router.put('/save',messageController.putSaveMessage);
module.exports = router;