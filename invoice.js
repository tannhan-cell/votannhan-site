function createInvoice(){

const { jsPDF } = window.jspdf
const doc = new jsPDF()

// ===== HEADER =====
doc.setFont("Helvetica","bold")
doc.setFontSize(20)
doc.text("VOTANNHAN ELECTRONICS",105,20,{align:"center"})

doc.setFontSize(12)
doc.setFont("Helvetica","normal")
doc.text("Sales Invoice",105,28,{align:"center"})

// ===== ORDER INFO =====
const orderID="VN"+Math.floor(Math.random()*100000)

let today=new Date()

let date=today.toLocaleString("vi-VN")

doc.setFontSize(10)

doc.text("Order ID: "+orderID,20,40)
doc.text("Date: "+date,20,46)

doc.line(20,50,190,50)

// ===== TABLE HEADER =====
let y=60

doc.setFont("Helvetica","bold")

doc.text("Product",20,y)
doc.text("Qty",120,y)
doc.text("Price",150,y)
doc.text("Total",190,y,{align:"right"})

doc.line(20,y+2,190,y+2)

y+=10

doc.setFont("Helvetica","normal")

let total=0

// ===== PRODUCTS =====
cart.forEach(i=>{

let price=i.price
let sum=i.qty*i.price

// tránh lỗi text quá dài
let productName = doc.splitTextToSize(i.name,90)

doc.text(productName,20,y)

doc.text(String(i.qty),120,y)

doc.text(price.toLocaleString()+" đ",150,y)

doc.text(sum.toLocaleString()+" đ",190,y,{align:"right"})

total+=sum

y+=10

})

// ===== TOTAL =====
doc.line(20,y,190,y)

y+=10

doc.setFont("Helvetica","bold")
doc.setFontSize(14)

doc.text("TOTAL: "+total.toLocaleString()+" đ",190,y,{align:"right"})

// ===== FOOTER =====
doc.setFontSize(10)
doc.setFont("Helvetica","normal")

doc.text("Thank you for shopping at VOTANNHAN.SITE!",105,270,{align:"center"})
doc.text("Website: votannhan.site",105,276,{align:"center"})

doc.save("hoadon.pdf")

}
