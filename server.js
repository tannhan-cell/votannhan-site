const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const bodyParser = require("body-parser");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// ===== CONFIG =====
const BOT_TOKEN = "8553903282:AAEjaRU2bFoT04fWAFrUF2cUOeSXmXP4How";

// ===== DATA =====
let users = [];
let currentData = { sys: 0, dia: 0, hr: 0 };

// ===== WEBSOCKET =====
let clients = [];
wss.on("connection", ws => {
  clients.push(ws);
  ws.on("close", () => {
    clients = clients.filter(c => c !== ws);
  });
});

function broadcast(data){
  clients.forEach(c => c.send(JSON.stringify(data)));
}

// ===== ESP32 gửi data =====
app.post("/api/data", async (req, res) => {
  currentData = req.body;

  // gửi realtime
  broadcast({type:"data", data: currentData});

  // gửi telegram
  for (let u of users) {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        chat_id: u.chat_id,
        text: `📊 ${u.name}\nSYS:${currentData.sys}\nDIA:${currentData.dia}\nHR:${currentData.hr}`
      })
    });
  }

  res.send("OK");
});

// ===== GET DATA =====
app.get("/api/data", (req,res)=>res.json(currentData));
app.get("/api/users", (req,res)=>res.json(users));

// ===== TELEGRAM WEBHOOK =====
app.post("/telegram", (req,res)=>{
  const msg = req.body.message;

  if(msg){
    const chat_id = msg.chat.id;
    const name = msg.from.first_name;

    if(!users.find(u=>u.chat_id == chat_id)){
      users.push({name, chat_id});
      console.log("New user:", name);

      broadcast({type:"users", data: users});
    }
  }

  res.send("OK");
});

server.listen(3000, ()=>{
  console.log("Server running at http://localhost:3000");
});
