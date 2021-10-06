const express = require('express');

const messageController = require('../controllers/message');

const router = express.router;

router.put('/save',messageController.putSaveMessage);
module.exports(router);