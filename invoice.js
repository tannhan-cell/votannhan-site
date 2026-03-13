function createInvoice(){

const { jsPDF } = window.jspdf
const doc = new jsPDF()

// tiêu đề
doc.setFont("Helvetica","bold")
doc.setFontSize(18)
doc.text("VOTANNHAN ELECTRONICS",105,20,null,null,"center")

doc.setFontSize(12)
doc.setFont("Helvetica","normal")
doc.text("Hoa don ban hang",105,30,null,null,"center")

// đường kẻ
doc.line(20,35,190,35)

let y=50
let total=0

doc.setFont("Helvetica","bold")
doc.text("San pham",20,y)
doc.text("SL",120,y)
doc.text("Gia",150,y)

y+=10

doc.setFont("Helvetica","normal")

cart.forEach(i=>{

let price=i.qty*i.price

doc.text(i.name,20,y)
doc.text(String(i.qty),120,y)
doc.text(price+" VND",150,y)

total+=price
y+=10

})

// đường kẻ
doc.line(20,y,190,y)

y+=10

doc.setFont("Helvetica","bold")
doc.text("Tong cong: "+total+" VND",20,y)

// footer
doc.setFontSize(10)
doc.text("Cam on quy khach da mua hang!",105,280,null,null,"center")

doc.save("hoa-don-votannhan.pdf")

}
