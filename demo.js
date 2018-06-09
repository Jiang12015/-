#!/usr/bin/env node

var fs = require('fs');

var dirName = process.argv[2]

 fs.mkdir("./" + dirName, function(err){
  if(err){
   console.log("err");
  }else{
   process.chdir("./" + dirName) // cd $1
  fs.mkdirSync('css') // mkdir css
  fs.mkdirSync('js') // mkdir js
  fs.writeFileSync("./index.html", "<!DOCTYPE><title>Hello</title><h1>Hi</h1>")
  fs.writeFileSync("css/style.css", "h1{color: red;}")
  fs.writeFileSync("./js/main.js", "var string = 'Hello World'alert(string)")

   console.log("creat done!");
  }
 })