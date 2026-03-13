function createInvoice(){

const { jsPDF } = window.jspdf
const doc = new jsPDF()

doc.text("Hoa don VOTANNHAN",20,20)

doc.save("invoice.pdf")

}
