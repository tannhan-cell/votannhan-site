function createChatbox(){

let html=`

<div id="chatbox">

<div id="chat-header">
AI hỗ trợ mua linh kiện
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

box.innerHTML+=`<p><b>Bạn:</b> ${msg}</p>`

input.value=""

let reply=await askAI(msg)

box.innerHTML+=`<p><b>AI:</b> ${reply}</p>`

box.scrollTop=box.scrollHeight

}
