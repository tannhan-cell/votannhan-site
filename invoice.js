function createInvoice(customer){

const { jsPDF } = window.jspdf
const doc = new jsPDF()

// ===== LOGO =====
let logo=document.getElementById("logo-shop")

if(logo){
doc.addImage(logo,"PNG",20,10,25,25)
}

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

doc.text("Order ID: "+orderID,20,45)
doc.text("Date: "+date,20,51)

// ===== CUSTOMER =====
doc.setFont("Helvetica","bold")
doc.text("Customer Information",20,65)

doc.setFont("Helvetica","normal")

doc.text("Name: "+customer.name,20,72)
doc.text("Phone: "+customer.phone,20,78)
doc.text("Address: "+customer.address,20,84)

doc.line(20,90,190,90)

// ===== TABLE HEADER =====

let y=100

doc.setFillColor(240,240,240)
doc.rect(20,y-6,170,8,"F")

doc.setFont("Helvetica","bold")

doc.text("Product",25,y)
doc.text("Qty",120,y)
doc.text("Price",145,y)
doc.text("Total",185,y,{align:"right"})

y+=6

doc.line(20,y,190,y)

y+=8

doc.setFont("Helvetica","normal")

let total=0

// ===== PRODUCTS =====
cart.forEach(i=>{

let sum=i.qty*i.price

let name=doc.splitTextToSize(i.name,90)

doc.text(name,25,y)

doc.text(String(i.qty),120,y)

doc.text(i.price.toLocaleString()+" đ",145,y)

doc.text(sum.toLocaleString()+" đ",185,y,{align:"right"})

total+=sum

y+=10

})

// ===== TOTAL =====

doc.line(20,y,190,y)

y+=10

doc.setFont("Helvetica","bold")
doc.setFontSize(14)

doc.text("TOTAL: "+total.toLocaleString()+" đ",185,y,{align:"right"})

// ===== FOOTER =====

doc.setFontSize(10)
doc.setFont("Helvetica","normal")

doc.text("Thank you for shopping at VOTANNHAN.SITE",105,270,{align:"center"})
doc.text("Website: votannhan.site",105,276,{align:"center"})

doc.save("HoaDon.pdf")

}
