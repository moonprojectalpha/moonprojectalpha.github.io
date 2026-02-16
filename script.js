const DATA=[

{
name:"Aether Knight",
cat:"warrior",
desc:"Holy swordsman from the floating kingdom.",
imgs:[
"https://picsum.photos/600/400?1",
"https://picsum.photos/600/400?2",
"https://picsum.photos/600/400?3"
]
},

{
name:"Luna Mage",
cat:"mage",
desc:"Moonlight sorceress who bends time.",
imgs:[
"https://picsum.photos/600/400?4",
"https://picsum.photos/600/400?5",
"https://picsum.photos/600/400?6"
]
},

{
name:"Sylph Spirit",
cat:"spirit",
desc:"Wind fairy born from ancient forest.",
imgs:[
"https://picsum.photos/600/400?7",
"https://picsum.photos/600/400?8",
"https://picsum.photos/600/400?9"
]
},

{
name:"Crimson Samurai",
cat:"warrior",
desc:"Ronin wrapped in cursed flames.",
imgs:[
"https://picsum.photos/600/400?10",
"https://picsum.photos/600/400?11"
]
},

{
name:"Void Witch",
cat:"mage",
desc:"Caster who whispers to darkness.",
imgs:[
"https://picsum.photos/600/400?12",
"https://picsum.photos/600/400?13"
]
}

];


// ---------- PAGE2 LOAD GRID ----------
const grid=document.getElementById("grid");

if(grid){

function render(){

let s=document.getElementById("search").value.toLowerCase();

let checks=[...document.querySelectorAll(".filters input:checked")]
.map(c=>c.value);

grid.innerHTML="";

DATA.forEach((d,i)=>{

if(
d.name.toLowerCase().includes(s) &&
checks.includes(d.cat)
){

grid.innerHTML+=`
<div class="card" onclick="openDetail(${i})">
<img src="${d.imgs[0]}">
<h3>${d.name}</h3>
<p>${d.desc}</p>
</div>`;
}

});

}

render();

document.getElementById("search").oninput=render;
document.querySelectorAll(".filters input").forEach(c=>c.onchange=render);

function openDetail(i){
location.href="page3.html?id="+i;
}

}


// ---------- PAGE3 LOAD DETAIL ----------
const params=new URLSearchParams(location.search);
const id=params.get("id");

if(id!==null){

let d=DATA[id];

document.getElementById("title").textContent=d.name;
document.getElementById("mainImg").src=d.imgs[0];
document.getElementById("desc").textContent=d.desc;

let thumbs=document.getElementById("thumbs");

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
