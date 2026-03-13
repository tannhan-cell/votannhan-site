const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// API KEY
const OPENAI_KEY = "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"

// route AI
app.post("/ai", async (req,res)=>{

try{

let message = req.body.message

let response = await fetch("https://api.openai.com/v1/chat/completions",{
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
content:"Bạn là nhân viên tư vấn bán linh kiện điện tử của votannhan.site. Hãy tư vấn thân thiện và ngắn gọn."
},
{
role:"user",
content:message
}
]
})
})

let data = await response.json()

let reply="AI chưa trả lời được"

if(data.choices && data.choices.length>0){
reply = data.choices[0].message.content
}

res.json({
reply:reply
})

}catch(e){

res.json({
reply:"AI đang bận, thử lại sau."
})

}

})

// chạy server
app.listen(3000,()=>{
console.log("AI Server running at http://localhost:3000")
})
