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

if(data.choices && data.choices.length>0){
return data.choices[0].message.content
}else{
return "AI chưa trả lời được."
}

}catch(e){

return "AI đang bận, vui lòng thử lại."

}

}


