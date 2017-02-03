var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("This domain is currently for sale");
});

module.exports = router;
