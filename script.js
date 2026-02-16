function openCategory(c){
localStorage.cat=c;
location.href="page2.html";
}

function goHome(){
location.href="index.html";
}

function goBack(){
history.back();
}

const DB={
area:[
{name:"Crystal City",img:"https://picsum.photos/400/300?11",text:"Kota kristal besar"},
{name:"Iron Valley",img:"https://picsum.photos/400/300?12",text:"Lembah mesin tua"},
{name:"Azure Forest",img:"https://picsum.photos/400/300?13",text:"Hutan biru misterius"}
],
character:[
{name:"Ice Queen",img:"https://picsum.photos/400/300?21",text:"Ratu es"},
{name:"Flame Knight",img:"https://picsum.photos/400/300?22",text:"Ksatria api"}
],
monster:[
{name:"Shadow Beast",img:"https://picsum.photos/400/300?31",text:"Monster bayangan"}
]
};

let current=[];

function loadList(){
let c=localStorage.cat||"area";
current=DB[c]||[];
render(current);
}

function render(arr){
let h="";
arr.forEach(d=>{
h+=`
<div class="item" onclick="openDetail('${d.name}')">
<img src="${d.img}">
<b>${d.name}</b>
<p>${d.text}</p>
</div>`;
});
document.getElementById("list").innerHTML=h;
}

function search(){
let q=document.getElementById("search").value.toLowerCase();
render(current.filter(d=>d.name.toLowerCase().includes(q)));
}

function openDetail(n){
localStorage.detail=n;
location.href="page3.html";
}

function loadDetail(){
let n=localStorage.detail;
let all=[...DB.area,...DB.character,...DB.monster];
let d=all.find(x=>x.name===n);
if(!d)return;
document.getElementById("img").src=d.img;
document.getElementById("text").innerText=d.text;
}
