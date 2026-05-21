const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/blood_pressure");

// Schema
const PatientSchema = new mongoose.Schema({
  name: String,
  dob: String,
  cccd: String,
  address: String,
  records: [
    {
      time: String,
      sys: Number,
      dia: Number,
      hr: Number,
    },
  ],
});

const Patient = mongoose.model("Patient", PatientSchema);

// 🔐 Login đơn giản
app.post("/login", (req, res) => {
  const { password } = req.body;
  if (password === "admin123") return res.send({ ok: true });
  res.send({ ok: false });
});

// ➕ Thêm bệnh nhân
app.post("/patient", async (req, res) => {
  const p = new Patient(req.body);
  await p.save();
  res.send(p);
});

// 📥 Lấy danh sách
app.get("/patient", async (req, res) => {
  const data = await Patient.find();
  res.send(data);
});

// 📊 Thêm kết quả đo
app.post("/record/:cccd", async (req, res) => {
  const { cccd } = req.params;
  const patient = await Patient.findOne({ cccd });

  patient.records.push(req.body);
  await patient.save();

  res.send("ok");
});

app.listen(3000, () => console.log("Server chạy 3000"));
