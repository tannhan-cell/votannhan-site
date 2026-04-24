const API = "http://YOUR_ESP32_IP";

let users = [];
let currentUser = null;
let chart;

function showPage(p){
document.querySelectorAll(".page").forEach(x=>x.style.display="none");
document.getElementById(p).style.display="block";
}

// ===== USERS =====
async function loadUsers(){
let res = await fetch(API+"/api/users");
users = await res.json();

userSelect.innerHTML = "";
userList.innerHTML = "";

users.forEach(u=>{
userSelect.innerHTML += `<option value="${u.id}">${u.name}</option>`;

```
userList.innerHTML += `<li>
  ${u.name}
  <button onclick="deleteUser(${u.id})">X</button>
</li>`;
```

});

if(users.length>0){
currentUser = users[0].id;
}
}

function changeUser(){
currentUser = userSelect.value;
userTitle.innerText = userSelect.options[userSelect.selectedIndex].text;
}

function addUser(){
fetch(API+"/api/users",{
method:"POST",
body: JSON.stringify({name:newUser.value})
}).then(loadUsers);
}

function deleteUser(id){
fetch(API+"/api/users/delete",{
method:"POST",
body: JSON.stringify({id:id})
}).then(loadUsers);
}

// ===== DATA =====
function initChart(){
chart = new Chart(document.getElementById("chart"),{
type:"line",
data:{labels:[],datasets:[{label:"SYS",data:[]}]}
});
}

async function loadData(){
let res = await fetch(API+"/api/data");
let d = await res.json();

if(d.user != currentUser) return;

sys.innerText = d.sys;
dia.innerText = d.dia;
hr.innerText = d.hr;

chart.data.labels.push(new Date().toLocaleTimeString());
chart.data.datasets[0].data.push(d.sys);

if(chart.data.labels.length>10){
chart.data.labels.shift();
chart.data.datasets[0].data.shift();
}

chart.update();
}

initChart();
loadUsers();
setInterval(loadData,2000);
