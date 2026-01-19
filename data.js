let stock = JSON.parse(localStorage.getItem("stock") || "{}");
let sales = JSON.parse(localStorage.getItem("sales") || "[]");
let purchases = JSON.parse(localStorage.getItem("purchases") || "[]");

function saveAll(){
  localStorage.setItem("stock", JSON.stringify(stock));
  localStorage.setItem("sales", JSON.stringify(sales));
  localStorage.setItem("purchases", JSON.stringify(purchases));
}