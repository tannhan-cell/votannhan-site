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

document.getElementById("chat-input").addEventListener("keydown",e=>{
if(e.key==="Enter"){
sendAI()
}
})

async function sendAI(){

let input=document.getElementById("ai-input")

let msg=input.value

if(!msg) return

let chat=document.getElementById("ai-chat")

chat.innerHTML+=`<div class="user">${msg}</div>`

input.value=""

let reply=await askAI(msg)

chat.innerHTML+=`<div class="ai">${reply}</div>`

chat.scrollTop=chat.scrollHeight

}

function toggleChat(){

let box=document.getElementById("chatbox")

if(box.classList.contains("min")){
box.classList.remove("min")
}else{
box.classList.add("min")
}

}
