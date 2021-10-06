const express = require('express');

const messageController = require('../controllers/message');

const router = express.Router();

router.put('/save',messageController.putSaveMessage);
router.post('/getMessagesByLocation',messageController.postGetMessages);

module.exports = router;