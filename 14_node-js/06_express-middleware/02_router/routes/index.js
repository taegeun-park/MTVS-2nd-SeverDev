const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>GET : / 요청에 대한 라우터 분리 후 응답</h1>');
});

module.exports = router;