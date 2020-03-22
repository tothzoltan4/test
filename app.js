function MessageHandler() {
}

MessageHandler.prototype.getSignature = function(m) {
    var crypto = require("crypto");
    var replaceAll = function(x) {
        return x.replace(/\s/g, '')
    };
    return crypto
        .createHmac("sha384", "FxDa5w314kLlNseq2sKuVwaqZshZT5d6")
        .update(m)
        .digest("base64");
}


var data = require("./data.json");
var handler = new MessageHandler();
console.log(handler.getSignature(JSON.stringify(data)));