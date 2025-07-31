const { array } = require("./array-controller");
function printHelloWorld(req, res){
    res.send(array);
}

module.exports = {
    printHelloWorld ,
}
