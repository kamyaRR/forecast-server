var http =  require('http');
var router = require('./router');
http.createServer(function(req,res){
    //safe asli
    router.home(req,res)

    //safe shahrha
    router.shahr(req,res)

}).listen(5000 ,function(){
    console.log('server is runnig'); 
})