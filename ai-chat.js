async function sendAI(){

let input=document.getElementById("ai-input")
let chat=document.getElementById("ai-chat")

let message=input.value.trim()

if(message==="") return

chat.innerHTML+="<div><b>Bạn:</b> "+message+"</div>"

input.value=""

chat.innerHTML+="<div id='ai-loading'>AI đang trả lời...</div>"

try{

let res=await fetch("/ai",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:message
})
})

let data=await res.json()

document.getElementById("ai-loading").remove()

chat.innerHTML+="<div style='color:#007bff'><b>AI:</b> "+data.reply+"</div>"

}catch(e){

document.getElementById("ai-loading").remove()

chat.innerHTML+="<div style='color:red'>Không kết nối được AI server</div>"

}

chat.scrollTop=chat.scrollHeight

}
