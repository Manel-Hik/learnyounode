var fs = require("fs");

data = fs.readFile(process.argv[2], function (err, data) {
//this is the callBack function
   if (err) return console.error(err);
   console.log((data.toString().split('\n')).length - 1)
});


