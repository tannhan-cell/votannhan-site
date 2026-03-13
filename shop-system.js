let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(id){

let p = products.find(x => x.id === id)

if(!p) return

let item = cart.find(x => x.id === id)

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

let total=0

cart.forEach((i,idx)=>{

total += i.price*i.qty

el.innerHTML += `
<div>
${i.name} x${i.qty} = ${i.price*i.qty}đ
<button onclick="removeItem(${idx})">❌</button>
</div>
`

})

el.innerHTML += `<hr>Tổng: <b>${total}đ</b>`

localStorage.setItem("cart",JSON.stringify(cart))

}

function removeItem(i){

cart.splice(i,1)

updateCart()

}

updateCart()
