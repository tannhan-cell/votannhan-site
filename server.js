const express = require("express");
const fs = require("fs");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(express.json());

const BOT_TOKEN = "8553903282:AAEjaRU2bFoT04fWAFrUF2cUOeSXmXP4How";

let db = { users: [], data: [] };

// load file
if(fs.existsSync("db.json")){
db = JSON.parse(fs.readFileSync("db.json"));
}

// save
function save(){
fs.writeFileSync("db.json", JSON.stringify(db,null,2));
}

// ===== AI PHÂN TÍCH =====
function analyze(sys){
if(sys >= 180) return "🚨 NGUY HIỂM";
if(sys >= 140) return "⚠️ CAO";
if(sys >= 120) return "📊 TIỀN CAO";
return "✅ BÌNH THƯỜNG";
}

// ===== ESP32 GỬI =====
app.post("/api/data", async (req,res)=>{
let d = req.body;
d.time = new Date().toLocaleString();

db.data.push(d);
save();

let u = db.users.find(x=>x.id == d.user_id);

if(u){
let msg = analyze(d.sys);

```
await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body: JSON.stringify({
    chat_id: u.chat_id,
    text:`${msg}
```

SYS:${d.sys}
DIA:${d.dia}
HR:${d.hr}`
})
});
}

res.send("OK");
});

// ===== TELEGRAM AUTO REGISTER =====
app.post("/telegram",(req,res)=>{
let msg = req.body.message;

if(msg && msg.text === "/start"){
let chat_id = msg.chat.id;
let name = msg.from.first_name;

```
if(!db.users.find(u=>u.chat_id==chat_id)){
  db.users.push({
    id: Date.now(),
    name,
    chat_id
  });
  save();
}
```

}

res.send("OK");
});

// ===== API =====
app.get("/api/users",(req,res)=>res.json(db.users));
app.get("/api/data",(req,res)=>res.json(db.data));

// ===== UPDATE NAME =====
app.post("/api/updateUser",(req,res)=>{
let {id,name} = req.body;

let u = db.users.find(x=>x.id == id);
if(u){
u.name = name;
save();
}

res.send("OK");
});

app.listen(3000,()=>console.log("SERVER OK"));
