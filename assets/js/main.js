
// CAROUSEL
var modalContainer = document.getElementById("modalContainer");
var img1 = document.getElementById("img1");
var modalImg1 = document.getElementById("modalImg1");

img1.onclick = function(){
    modalContainer.style.display = "block";
    modalImg1.src = "assets/img/IEC and info/DidYouKnow_2020_WarmestProjected.jpg";
    }
    
img2.onclick = function(){
    modalContainer.style.display = "block";
    modalImg1.src = "assets/img/IEC and info/DidYouKnow_UHI_IncreaseEnergyConsumption.jpg";
    }
    
img3.onclick = function(){
    modalContainer.style.display = "block";
    modalImg1.src = "assets/img/IEC and info/GUHEAT GUHIT_UbeTrivia.jpg";
    }
    
img4.onclick = function(){
    modalContainer.style.display = "block";
    modalImg1.src = "assets/img/IEC and info/Lst_combined.png";
    }
    
var span = document.getElementById("closeButt");

span.onclick = function() {
  modalContainer.style.display = "none";
}



// DATA DOWNLOAD
// var text = [text1,text2,text3]
// text.forEach(function(el) {
//     var div = document.createElement("div");
//     div.className = "finalBlock";
//     div.innerHTML = el;
//     document.body.appendChild(div);
// });
