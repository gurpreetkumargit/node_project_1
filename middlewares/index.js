const fs = require("fs");

function logResponse() {
  return (req, res, next) => {
    console.log("log middleware");
    const log = `\n${Date.now()} ${req.method} ${req.ip}`;
    console.log("log", log);
    fs.appendFile("./log.txt", log, (err, data) => {
      next();
    });
  };
}

module.exports = { logResponse };
