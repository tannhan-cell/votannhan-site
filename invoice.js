function createInvoice(){

const { jsPDF } = window.jspdf
const doc = new jsPDF()

doc.text("HOA DON VOTANNHAN",20,20)

let y=40
let total=0

cart.forEach(i=>{

let line = i.name+" x"+i.qty+" = "+(i.qty*i.price)+" VND"

doc.text(line,20,y)

y+=10

total += i.qty*i.price

})

doc.text("Tong: "+total+"đ",20,y+10)

doc.save("invoice.pdf")

}
