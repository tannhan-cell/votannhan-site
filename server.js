const express = require("express");
const fs = require("fs");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(express.json());

const BOT_TOKEN = "8553903282:AAEjaRU2bFoT04fWAFrUF2cUOeSXmXP4How";

// ===== LOAD DATA =====
let db = {
users: [],
data: []
};

if(fs.existsSync("db.json")){
db = JSON.parse(fs.readFileSync("db.json"));
}

// ===== SAVE =====
function save(){
fs.writeFileSync("db.json", JSON.stringify(db,null,2));
}

// ===== ESP32 gửi =====
app.post("/api/data", async (req,res)=>{
let d = req.body;

d.time = new Date().toISOString();

db.data.push(d);
save();

// gửi telegram cho user tương ứng
let u = db.users.find(x=>x.id == d.user_id);

if(u){
await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body: JSON.stringify({
chat_id: u.chat_id,
text:`📊 ${u.name}
SYS:${d.sys}
DIA:${d.dia}
HR:${d.hr}`
})
});
}

res.send("OK");
});

// ===== TELEGRAM =====
app.post("/telegram",(req,res)=>{
let msg = req.body.message;

if(msg){
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

app.listen(3000,()=>console.log("Server OK"));
