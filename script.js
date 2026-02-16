function openCategory(cat){
localStorage.cat=cat;
location="page2.html";
}

function goHome(){
location="index.html";
}

function goBack(){
history.back();
}

/* DATA SAMPLE BANYAK */
const DB={
area:[
{name:"Crystal City",img:"https://picsum.photos/400/300?11",desc:"Kota kristal megah"},
{name:"Iron Valley",img:"https://picsum.photos/400/300?12",desc:"Lembah industri tua"},
{name:"Azure Forest",img:"https://picsum.photos/400/300?13",desc:"Hutan bercahaya biru"},
{name:"Frost Peak",img:"https://picsum.photos/400/300?14",desc:"Gunung salju abadi"},
{name:"Golden Desert",img:"https://picsum.photos/400/300?15",desc:"Padang emas luas"},
{name:"Emerald Lake",img:"https://picsum.photos/400/300?16",desc:"Danau hijau tenang"}
],

character:[
{name:"Ice Queen",img:"https://picsum.photos/400/300?21",desc:"Ratu es legendaris"},
{name:"Flame Knight",img:"https://picsum.photos/400/300?22",desc:"Ksatria api"},
{name:"Wind Archer",img:"https://picsum.photos/400/300?23",desc:"Pemanah angin"}
]
};

function loadCategory(){
const cat=localStorage.cat||"area";
let data=DB[cat]||[];
render(data);
window._data=data;
}

function render(arr){
let html="";
arr.forEach(d=>{
html+=`
<div class="item" onclick="openDetail('${d.name}')">
<img src="${d.img}">
<b>${d.name}</b>
<p>${d.desc}</p>
</div>`;
});
document.getElementById("list").innerHTML=html;
}

function doSearch(){
let q=document.getElementById("search").value.toLowerCase();
let f=_data.filter(d=>d.name.toLowerCase().includes(q));
render(f);
}

function openDetail(name){
localStorage.detail=name;
location="page3.html";
}

function loadDetail(){
let name=localStorage.detail;
let all=[...DB.area,...DB.character];
let d=all.find(x=>x.name===name);

document.getElementById("big").src=d.img;
document.getElementById("text").innerText=d.desc+" — lorem ipsum panjang untuk detail halaman.";

let g="";
for(let i=0;i<4;i++){
g+=`<img src="${d.img}" onclick="document.getElementById('big').src=this.src">`;
}
document.getElementById("gallery").innerHTML=g;
}
