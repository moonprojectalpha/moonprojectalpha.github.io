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
async function loadData(){
  const res = await fetch("data.json");
  return await res.json();
}

async function showData(){
  const data = await loadData();

  const grid = document.querySelector(".grid");
  if(!grid) return;

  grid.innerHTML = "";

  data.forEach(item=>{
    grid.innerHTML += `
      <div class="item">
        <img src="${item.thumb}">
        <p>${item.name}</p>
        <button onclick='openDetail(${JSON.stringify(item)})'>
          Detail
        </button>
      </div>
    `;
  });
}

function openDetail(item){
  localStorage.setItem("detail", JSON.stringify(item));
  location.href="detail.html";
}

async function showDetail(){
  const item = JSON.parse(localStorage.getItem("detail"));
  if(!item) return;

  document.getElementById("mainImage").src = item.images[0];

  const thumbs = document.querySelector(".thumb-row");
  thumbs.innerHTML="";

  item.images.forEach(img=>{
    thumbs.innerHTML+=`
      <img src="${img}" onclick="setMain('${img}')">
    `;
  });

  document.getElementById("desc").innerText=item.desc;
}
