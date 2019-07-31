module.exports.view = view ;
var fs = require('fs');
function view(temp, res){
    var k = fs.readFileSync('./views/' + temp + '.html' , {"encoding" : "utf8" })
    

    res.write(k);
}
