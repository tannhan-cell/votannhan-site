import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const OPENAI_KEY = "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";

app.post("/ai", async (req, res) => {

  try{

    const r = await fetch("https://api.openai.com/v1/chat/completions",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+OPENAI_KEY,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        model:"gpt-4o-mini",
        messages:req.body.messages
      })
    });

    const data = await r.json();

    res.json(data);

  }catch(e){

    res.status(500).json({error:"AI error"});

  }

});

app.listen(3000,()=>{
  console.log("AI server running");
});
