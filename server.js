var http = require('http');
var router = require('./router');
http.createServer(
    (req,res)=>{

//localhost:5000
router.home(req,res)

//localhost:5000/shahr
router.forecast(req,res)
}).listen(5000);


console.log('server is running');