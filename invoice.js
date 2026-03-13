function createInvoice(cart){

const {jsPDF}=window.jspdf
let doc=new jsPDF()

doc.text("VOTANNHAN.SITE",20,20)

let y=40

cart.forEach(p=>{
doc.text(p.name+" - "+p.price+"đ",20,y)
y+=10
})

doc.save("hoadon.pdf")
}
