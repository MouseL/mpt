var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

// var ctx = 'https://mpt.onetwoer.com/';
var ctx = 'http://192.168.43.115:18081';

/* GET home page. */

router.get('/', function(req, res) 
{
    // var ctx = req.protocol + '://' + req.hostname + ':18081';    
    res.render('index', 
    {
        ctx : ctx,
        guid: uuid.v1()
    });
});


router.get('/choose/:guid', function(req, res)
{
    // var ctx = req.protocol + '://' + req.hostname + ':18081';    
    var guid = req.params.guid;

    res.render('choose', 
    {
        ctx : ctx,
        guid: guid
    });
});


router.get('/support', function(req, res)
{

    res.render('support', 
    {});
});


router.get('/privacy', function(req, res)
{

    res.render('privacy', 
    {});
});

router.get('/dnspod', function(req, res)
{
    res.render('dnspod', 
    {});
});

module.exports = router;
