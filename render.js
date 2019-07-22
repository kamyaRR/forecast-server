module.exports.view = view;
var fs = require('fs');

function view(temp,v, res){
    var ff = fs.readFileSync('./views/' + temp + ".html" , {"encoding" : "utf8"});
    res.write(ff);
};