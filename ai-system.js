const OPENAI_API="https://api.openai.com/v1/chat/completions"

const OPENAI_KEY="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"

async function askAI(message){

try{

let res = await fetch(OPENAI_API,{
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
content:"Bạn là nhân viên bán linh kiện điện tử của votannhan.site. Hãy tư vấn sản phẩm cho khách."
},
{
role:"user",
content:message
}
]
})
})

let data = await res.json()

if(!res.ok){
return "AI lỗi API."
}

if(data.choices && data.choices.length>0){
return data.choices[0].message.content
}

return "AI chưa trả lời được."

}catch(e){

console.error(e)

return "AI đang bận, vui lòng thử lại."

}

}
