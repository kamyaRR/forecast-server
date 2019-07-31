var hhtp =require('http');
module.exports.home = asli;
module.exports.shahr = shahr;
var querysttring = require('querystring')
var render = require('./render');
function asli (req,res){
  if(req.url == "/"){
    if(req.method == "GET"){
      res.writeHead(200, {'Content-Type': 'text.html'});
      render.view("location" , res)
      res.end();
    }
      else{
        req.on('data' , function(gg){
          var query = querysttring.parse(gg.toString())
          //console.log(query);
          res.writeHead(302, {"Location" : "/" + query.location});
          res.end();
        })
      }
    
  }
}
function shahr(req,res){
  var makan = req.url.replace("/", "")
  //console.log(makan);
  if(makan.length > 0){
    res.writeHead(200, {"Content.Type": "text.plain"})
    res.write("ABolhava");
    res.end();
  }

}