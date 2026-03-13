function createChatbox(){

let html=`

<div id="chatbox" class="min">

<div id="chat-header" onclick="toggleChat()">
AI hỗ trợ mua linh kiện ⬆
</div>
<div id="chat-messages"></div>

<input id="chat-input" placeholder="Hỏi AI về sản phẩm...">

<button onclick="sendAI()">Gửi</button>

</div>

`

document.body.insertAdjacentHTML("beforeend",html)

}

createChatbox()

async function sendAI(){

let input=document.getElementById("chat-input")

let msg=input.value.trim()

if(!msg) return

let box=document.getElementById("chat-messages")

box.insertAdjacentHTML("beforeend", `<p><b>Bạn:</b> ${msg}</p>`)
  box.insertAdjacentHTML("beforeend", `<p><b>AI:</b> ${reply}</p>`)
  

input.value=""

let reply=""

try{
reply=await askAI(msg)
}catch(e){
reply="AI đang bận, vui lòng thử lại."
}

document.addEventListener("keydown",e=>{
if(e.key==="Enter"){
sendAI()
}
})
  function toggleChat(){

let box=document.getElementById("chatbox")

if(box.classList.contains("min")){
box.classList.remove("min")
}else{
box.classList.add("min")
}

}
