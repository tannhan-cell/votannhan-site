const AI_API = "http://localhost:3000/ai"

async function askAI(message){

try{

const res = await fetch(AI_API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
messages:[
{
role:"system",
content:"Bạn là nhân viên tư vấn linh kiện điện tử của votannhan.site. Hãy trả lời ngắn gọn và giúp khách chọn linh kiện phù hợp."
},
{
role:"user",
content:message
}
]
})
})

const data = await res.json()

if(data.choices && data.choices.length>0){

return data.choices[0].message.content

}

return "AI không trả lời"

}catch(e){

return "Không kết nối được AI server"

}

}
