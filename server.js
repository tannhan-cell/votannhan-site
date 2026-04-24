const express = require("express");
const app = express();

app.use(express.json());

let users = [];
let data = { sys:120, dia:80, hr:70 };

// ===== ESP32 gửi data lên =====
app.post("/api/data", (req,res)=>{
  data = req.body;

  // gửi Telegram luôn
  users.forEach(u=>{
    fetch(`https://api.telegram.org/bot${process.env.BOT}/sendMessage`,{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        chat_id: u.chat_id,
        text: `SYS:${data.sys} DIA:${data.dia} HR:${data.hr}`
      })
    });
  });

  res.send("OK");
});

// ===== Web lấy data =====
app.get("/api/data",(req,res)=>{
  res.json(data);
});

// ===== User =====
app.post("/api/user",(req,res)=>{
  users.push(req.body);
  res.send("OK");
});

app.get("/api/user",(req,res)=>{
  res.json(users);
});

app.listen(3000,()=>console.log("Server chạy"));
