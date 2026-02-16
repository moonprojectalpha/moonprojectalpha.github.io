function setMain(src){
  document.getElementById("mainImage").src = src;
}

function openPopup(src){
  const p = document.getElementById("popup");
  const img = document.getElementById("popupImg");
  img.src = src;
  p.style.display="flex";
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}
