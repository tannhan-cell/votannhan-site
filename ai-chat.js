const API="https://api.openai.com/v1/chat/completions"
const KEY="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"

async function askAI(msg){
let res=await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+KEY
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{role:"system",content:"Bạn là nhân viên bán linh kiện điện tử của votannhan.site"},
{role:"user",content:msg}
]
})
})

let data=await res.json()
return data.choices[0].message.content
}
