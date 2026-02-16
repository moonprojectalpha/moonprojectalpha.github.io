const DATA=[

{type:"character",name:"Ice Queen",desc:"Frozen monarch",imgs:["https://picsum.photos/600/400?1"]},
{type:"character",name:"Blade Hero",desc:"Legend swordsman",imgs:["https://picsum.photos/600/400?2"]},

{type:"area",name:"Crystal City",desc:"Shining capital",imgs:["https://picsum.photos/600/400?3"]},

{type:"support",name:"Guild Order",desc:"Alliance faction",imgs:["https://picsum.photos/600/400?4"]},

{type:"monster",name:"Void Dragon",desc:"Ancient beast",imgs:["https://picsum.photos/600/400?5"]},

{type:"item",name:"Sun Relic",desc:"Holy artifact",imgs:["https://picsum.photos/600/400?6"]},

{type:"magic",name:"Ice",desc:"Elemental frost magic",imgs:["https://picsum.photos/600/400?7"]}

];


// ===== PAGE2 =====
const grid=document.getElementById("grid");

if(grid){

const params=new URLSearchParams(location.search);
const cat=params.get("cat");

if(!cat){
location.href="index.html"; // AUTO FIX BUG
}

document.getElementById("title").textContent=cat.toUpperCase();

const searchInput=document.getElementById("search");
const filters=document.getElementById("filters");

function render(){

let s=searchInput.value.toLowerCase();

filters.style.display=s?"block":"none";

grid.innerHTML="";

DATA.forEach((d,i)=>{

if(d.type!==cat) return;

if(!s || d.name.toLowerCase().includes(s) || d.desc.toLowerCase().includes(s)){

grid.innerHTML+=`
<div class="card" onclick="location.href='page3.html?id=${i}'">
<img src="${d.imgs[0]}">
<h3>${d.name}</h3>
<p>${d.desc}</p>
</div>`;

}

});

}

render();
searchInput.oninput=render;
}



// ===== PAGE3 =====
const id=new URLSearchParams(location.search).get("id");

if(id!==null && document.getElementById("mainImg")){

let d=DATA[id];

document.getElementById("title").textContent=d.name;
document.getElementById("mainImg").src=d.imgs[0];
document.getElementById("desc").textContent=d.desc;

let thumbs=document.getElementById("thumbs");

if(thumbs){
d.imgs.forEach(src=>{
let img=document.createElement("img");
img.src=src;
img.onclick=()=>{
document.getElementById("mainImg").src=src;
let p=document.getElementById("popup");
document.getElementById("popupImg").src=src;
p.style.display="flex";
};
thumbs.appendChild(img);
});
}

}
