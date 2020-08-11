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

function openTab(evt, tab){
    var i, tabContentContainer, tabButtons;
    
    tabContentContainer = document.getElementsByClassName("tabContentContainer");
    for (i=0; i < tabContentContainer.length; i++){
        tabContentContainer[i].style.display = "none";
    }
    
    tabButtons = document.getElementsByClassName("tab");
    for (i=0; i < tabButtons.length; i++){
        tabButtons[i].className = tabButtons[i].className.replace(" activeTab", "");
    }
    
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " activeTab";
}