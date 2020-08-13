
// Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({accessKeyId: 'AKIAXGZKK5FGN5JSFQXM', secretAccessKey: '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', region: 'ap-southeast-1'});

// Create S3 service object
s3 = new AWS.S3('2006-03-01');


const Bucket = 'www.guheat.tcagp.upd.edu.ph';
const bucketUrl = `https://s3-ap-southeast-1.amazonaws.com/${Bucket}`

// BASEMAP
var mymap = L.map('basemap1').setView([13.056494, 121.070576], 6);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: ' &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '© <a href="https://carto.com/">CARTO</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);

// DATA FINDER
function searchLST(evt, fileTab){
  var year = document.getElementById("selectYear").value;
  var pathRow = document.getElementById("selectPathRow").value;
  console.log(year)
  console.log(pathRow)
  // document.getElementById("mySelect").value;
  // Create the parameters for calling listObjects
  var bucketParams = {
    Bucket : 'www.guheat.tcagp.upd.edu.ph',
    Delimiter: '/',
    Prefix: 'data/layers/rasters/lst' + '/' + pathRow + '/' + year + '/'
  };
  listImages(bucketParams, fileTab)

}
function searchCity2(evt, fileTab){
  var city = document.getElementById("selectCity2").value;
  // document.getElementById("mySelect").value;
  // Create the parameters for calling listObjects
  var bucketParams = {
    Bucket : 'www.guheat.tcagp.upd.edu.ph',
    Delimiter: '/',
    Prefix: 'data/maps' + '/' + city + '/'
  };
  listImages(bucketParams, fileTab)

}
function searchCity1(evt, fileTab){
  var city = document.getElementById("selectCity1").value;
  // document.getElementById("mySelect").value;
  // Create the parameters for calling listObjects
  var bucketParams = {
    Bucket : 'www.guheat.tcagp.upd.edu.ph',
    Delimiter: '/',
    Prefix: 'data/layers/rasters/envimet' + '/' + city + '/'
  };
  listImages(bucketParams, fileTab)

}
function contentContainer(fileTab) {
    return document.getElementById(fileTab)
}
//function called from index.html
//gets name of all objects in the s3 bucket
//updates HTML with the file name 
function listImages(bucketParams, fileTab) {
  s3.listObjects(bucketParams, function(err, data) {
    if (err) {
      return alert('Error: ' + err.message);
    } else {
      var content = data.Contents;
      console.log(content)
      content.shift()
      const fileNames = content.map(function (content) { return content.Key; });
      const html = fileNames.map(function(file) {
        filesplit1 = file.split("/")
        filesplit2 = filesplit1[filesplit1.length -1].split(".")
        console.log(file)
        return `
        <div class="col-md-12 downloadinfo">
                      <h6>${filesplit2[0]}</h6>

                      <h6><a href="${bucketUrl}/${file}" target="_blank">Download File</a></h6>
                  </div>`
      })
      // var oldhtml = contentContainer(fileTab)
      // var newhtml = oldhtml.innerHTML + html
      // console.log(newhtml)
      // contentContainer(fileTab).innerHTML = newhtml
      contentContainer(fileTab).innerHTML = html.join('');
      // contentContainer(fileTab).innerHTML += html
      // contentContainer(fileTab).insertAdjacentHTML('beforeend', html);
      // contentContainer(fileTab).innerHTML = contentContainer(fileTab).innerHTML+ html
      // document.getElementById(fileTab).appendChild(html)
    }
  });
}



// TAB SWITCH
function openDataTab(evt, tab){
    var i, tabDataContentContainer, tabButtons;
    
    tabDataContentContainer = document.getElementsByClassName("tabDataContentContainer");
    for (i=0; i < tabDataContentContainer.length; i++){
        tabDataContentContainer[i].style.display = "none";
    }
    
    tabButtons = document.getElementsByClassName("tab");
    for (i=0; i < tabButtons.length; i++){
        tabButtons[i].className = tabButtons[i].className.replace(" activeTab", "");
    }
    
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " activeTab";
    
}




// var filesys = require('fs');
// var files = filesys.readdirSync('data/docs/');

// var files = ['text1','text2','text3']
// files.forEach(function(file) {
//     console.log(file)
//     var div = document.createElement("div");
//     div.className = "finalBlock";
//     div.innerHTML = file;
//     document.getElementById('mainbody').appendChild(div);
// });


// function contentContainer() {
//   return document.getElementById(fileTab)
// }
// //function called from index.html
// //gets name of all objects in the s3 bucket
// //updates HTML with the file name 
// function listImages() {
//   s3.listObjects(bucketParams, function(err, data) {
//     if (err) {
//       return alert('Error: ' + err.message);
//     } else {
//       var content = data.Contents;
//       const fileNames = content.map(function (content) { return content.Key; });
//       console.log(fileNames);
//       const html = fileNames.map(function(file) {
//         return `<div class="col-md-4 panel panel-default">
//           <div class="panel-heading">${file}</div>
//           <div class="panel-body">
//             <img src="${bucketUrl}/${file}">
//           </div>
//         </div>`
//       })
//       contentContainer().innerHTML = html.join('');
//     }
//   });
// }






// var AWS = require("aws-sdk");
// var s3 = new AWS.S3();
// var params = {Bucket: 'www.guheat.tcagp.upd.edu.ph', Key: 'AKIAXGZKK5FGN5JSFQXM', };
// s3.makeUnauthenticatedRequest('getObject', params, function (err, data) {
//   if (err) console.log(err);
//   else console.log(data.Body.toString());
// });



