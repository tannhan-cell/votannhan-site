let cart=[]

function addToCart(id){

let p=products.find(x=>x.id===id)

let item=cart.find(x=>x.id===id)

if(item){

item.qty++

}else{

cart.push({
id:p.id,
name:p.name,
price:p.price,
qty:1
})

}

updateCart()

}

function updateCart(){

let el=document.getElementById("cart-items")

if(!el) return

el.innerHTML=""

cart.forEach((i,idx)=>{

el.innerHTML += `
<div>
${i.name} x${i.qty}
<button onclick="removeItem(${idx})">❌</button>
</div>
`

})

}

function removeItem(i){

cart.splice(i,1)

updateCart()

}
