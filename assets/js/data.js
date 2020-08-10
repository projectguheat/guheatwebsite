// var filesys = require('fs');
// var files = filesys.readdirSync('data/docs/');


// files.forEach(function(file) {
//     console.log(file)
//     var div = document.createElement("div");
//     div.className = "finalBlock";
//     div.innerHTML = file;
//     document.getElementById('mainbody').appendChild(div);
// });


// var params = {
//     Bucket: 'www.guheat.tcagp.upd.edu.ph',
//     Delimiter: '/',
//     Prefix: 'data/'
//     };
    
//     s3Bucket.listObjects(params, function(err, data) {
//                 if (err) {
//                     return 'There was an error viewing your album: ' + err.message
//                 }else{
//                     console.log(data.Contents,"<<<all content");
    
//                     data.Contents.forEach(function(obj,index){
//                         console.log(obj.Key,"<<<file path")
//                     })
//                 }
//             })


// // Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// // Set the region 
// AWS.config.update({region: 'ap-southeast-1'});

// // Create S3 service object
// s3 = new AWS.S3('2006-03-01');

// // Create the parameters for calling listObjects
// var bucketParams = {
//   Bucket : 'www.guheat.tcagp.upd.edu.ph',
// };

// // Call S3 to obtain a list of the objects in the bucket
// s3.listObjects(bucketParams, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });
// var AWS = require("aws-sdk");
// var s3 = new AWS.S3();
// var params = {Bucket: 'www.guheat.tcagp.upd.edu.ph', Key: 'AKIAXGZKK5FGGPKRCVTC'};
// s3.makeUnauthenticatedRequest('getObject', params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data.Body.toString());
// });

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-southeast-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'www.guheat.tcagp.upd.edu.ph',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});