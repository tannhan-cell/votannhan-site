const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const OPENAI_KEY = "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"

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

res.json({reply:reply})

}catch(e){

console.log(e)

res.json({
reply:"AI đang bận, thử lại sau."
})

}

})

app.listen(3000,()=>{
console.log("AI Server running at http://localhost:3000")
})
