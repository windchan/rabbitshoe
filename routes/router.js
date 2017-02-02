var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("我老婆陈梦醒是世界上最可爱的宝宝！");
});

module.exports = router;
