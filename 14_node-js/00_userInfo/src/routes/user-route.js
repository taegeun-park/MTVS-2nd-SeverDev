const express = require('express');
const router = express.Router();
const UserController = require('../controller/user-controller');

router.get('/', UserController.findAllUser);
// router.get('/:userId', UserController.findUserByUserId');
// router.get('/online', 'UserController.findUserByOnlineUser');
// router.post('/', "유저 추가");
// router.put('/', "유저 정보 수정");
// router.delete('/', "유저 삭제");

module.exports = router;