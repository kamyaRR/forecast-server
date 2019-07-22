var http = require('http');
var url = require('url');
module.exports.home = asli;
module.exports.forecast = AboHava;
var render = require('./render');
var querystring = require('querystring');

function asli (req,res){
  if(req.url == '/'){

       if(req.method == "GET"){
        
      render.view("locatio", {}, res)
      res.end();
     }
     else{
       
       req.on('data', function(vivi){
         var query = querystring.parse(vivi.toString());
         console.log(query.location);
         res.writeHead(302,{"Location" : "/" + query.location})
         res.end();
        
       })
       
     }
  }
}



function AboHava (req,res){
  
  var makan =req.url.replace("/", "")
 console.log(makan);
  if(makan.length > 0){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('AboHava');
    res.end();
  }
  
}