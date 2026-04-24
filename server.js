const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

app.use(express.json());

// ===== CONFIG =====
const BOT_TOKEN = "8553903282:AAEjaRU2bFoT04fWAFrUF2cUOeSXmXP4How";

// ===== DATA =====
let users = [];
let history = {}; // {chat_id: [data,...]}
let currentData = {sys:120,dia:80,hr:70};

// ===== ESP32 gửi dữ liệu =====
app.post("/api/data", async (req,res)=>{
currentData = req.body;

let time = new Date().toLocaleString();

for(let u of users){
if(!history[u.chat_id]) history[u.chat_id]=[];

```
history[u.chat_id].push({...currentData,time});

// gửi telegram
await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({
    chat_id:u.chat_id,
    text:`📊 ${u.name}\nSYS:${currentData.sys}\nDIA:${currentData.dia}\nHR:${currentData.hr}`
  })
});
```

}

res.send("OK");
});

// ===== WEB =====
app.get("/api/data",(req,res)=>res.json(currentData));

app.get("/api/users",(req,res)=>res.json(users));

app.get("/api/history/:id",(req,res)=>{
res.json(history[req.params.id]||[]);
});

// ===== TELEGRAM REGISTER =====
app.post("/api/register",(req,res)=>{
let {name,chat_id}=req.body;

if(!users.find(u=>u.chat_id==chat_id)){
users.push({name,chat_id});
}

res.send("OK");
});

app.listen(3000,()=>console.log("Server running"));
