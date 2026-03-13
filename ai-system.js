/* =========================
VOTANNHAN AI SYSTEM
AI bán hàng + SEO + Dashboard
========================= */

const OPENAI_KEY="YOUR_OPENAI_KEY"
const TELEGRAM_BOT="YOUR_BOT_TOKEN"
const TELEGRAM_CHAT="YOUR_CHAT_ID"

/* =========================
AI CHATBOT
========================= */

function createAIChat(){

const box=document.createElement("div")

box.innerHTML=`
<div id="aiBox" style="
position:fixed;
bottom:20px;
right:20px;
width:300px;
background:white;
border-radius:10px;
box-shadow:0 0 10px rgba(0,0,0,0.2);
font-family:sans-serif">

<div style="background:#007bff;color:white;padding:8px">
🤖 AI bán hàng
</div>

<div id="aiLog" style="
height:220px;
overflow:auto;
padding:10px"></div>

<input id="aiInput"
placeholder="Hỏi sản phẩm..."
style="width:70%">

<button onclick="aiAsk()">Gửi</button>

</div>
`

document.body.appendChild(box)

}

createAIChat()

async function aiAsk(){

let msg=document.getElementById("aiInput").value

let log=document.getElementById("aiLog")

log.innerHTML+=`<div>👤 ${msg}</div>`

let res=await fetch(
"https://api.openai.com/v1/chat/completions",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+OPENAI_KEY
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{
role:"system",
content:"Bạn là nhân viên bán linh kiện điện tử, mục tiêu là bán hàng."
},
{
role:"user",
content:msg
}
]
})
}
)

let data=await res.json()

let reply=data.choices[0].message.content

log.innerHTML+=`<div>🤖 ${reply}</div>`

document.getElementById("aiInput").value=""

}

/* =========================
AI GỢI Ý SẢN PHẨM
========================= */

function aiRecommend(){

if(typeof allProducts==="undefined")return

let random=allProducts
.sort(()=>0.5-Math.random())
.slice(0,4)

let html="<h3>🤖 AI gợi ý</h3>"

random.forEach(p=>{

html+=`
<div>
${p.name} - ${p.price}
</div>
`

})

let box=document.createElement("div")

box.innerHTML=html

document.body.appendChild(box)

}

setTimeout(aiRecommend,4000)

/* =========================
TRACK KHÁCH TRUY CẬP
========================= */

async function trackVisitor(){

try{

let res=await fetch("https://api.ipify.org?format=json")
let ip=await res.json()

fetch(
`https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`,
{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
chat_id:TELEGRAM_CHAT,
text:`🌍 Khách truy cập\nIP: ${ip.ip}`
})
}
)

}catch(e){}

}

trackVisitor()

/* =========================
BẢN ĐỒ KHÁCH TRUY CẬP
========================= */

function createMap(){

let mapDiv=document.createElement("div")

mapDiv.id="visitorMap"
mapDiv.style.height="400px"

document.body.appendChild(mapDiv)

let script=document.createElement("script")
script.src="https://unpkg.com/leaflet/dist/leaflet.js"

document.head.appendChild(script)

}

/* =========================
GIỎ HÀNG
========================= */

let cart=[]

function addToCartAI(product){

cart.push(product)

alert("Đã thêm vào giỏ")

}

window.addToCartAI=addToCartAI

/* =========================
TẠO HÓA ĐƠN PDF
========================= */

function createInvoice(){

const {jsPDF}=window.jspdf

let pdf=new jsPDF()

pdf.text("VOTANNHAN SHOP",20,20)

let y=40

cart.forEach(p=>{

pdf.text(p.name+" "+p.price,20,y)

y+=10

})

pdf.save("invoice.pdf")

}

/* =========================
SEO AUTO
========================= */

function autoSEO(){

let meta=document.createElement("meta")

meta.name="description"

meta.content=
"Shop linh kiện điện tử ESP32 Arduino giá rẻ"

document.head.appendChild(meta)

}

autoSEO()

/* =========================
TỐC ĐỘ WEB
========================= */

function optimizeSpeed(){

document.querySelectorAll("img")
.forEach(img=>img.loading="lazy")

}

optimizeSpeed()

console.log("AI SYSTEM LOADED")
