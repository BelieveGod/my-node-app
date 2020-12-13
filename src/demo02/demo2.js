var fs = require("fs");

fs.readFile('input.txt',function(err,data){
  if(err){
    return console.err(err);

  }
  console.log(data.toString());
})
console.log( __dirname );
console.log( __filename );
console.log(process.pid);
console.log(process.platform);
console.log("程序执行结束");