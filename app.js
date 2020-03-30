function MessageHandler() {
}

MessageHandler.prototype.getSignature = function(m) {
    var crypto = require("crypto");
    var hmac = crypto
        .createHmac("sha384", "FxDa5w314kLlNseq2sKuVwaqZshZT5d6")
        .update(m, "utf-8")
        .digest("base64");
    return hmac;
}

/*
var data = require("./data.json");
var handler = new MessageHandler();
console.log(JSON.stringify(data));
console.log(handler.getSignature(JSON.stringify(data)));
*/