
var filesys = require('fs');
var files = filesys.readdirSync('data/docs/');


files.forEach(function(file) {
    console.log(file)
    var div = document.createElement("div");
    div.className = "finalBlock";
    div.innerHTML = file;
    document.getElementById('mainbody').appendChild(div);
});


// console.log(files)
// var text = ["text1","text2","text3"]
// text.forEach(function(el) {
//     var div = document.createElement("div");
//     div.className = "finalBlock bg-dark align-center-justify";
//     div.innerHTML = el;
//     document.getElementById('mainbody').appendChild(div);
// });
