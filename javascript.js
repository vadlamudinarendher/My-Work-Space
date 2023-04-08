console.log("page is ready")
console.log("page is ready")

var expense = document.getElementById("expense")
var description = document.getElementById("description")
var category = document.getElementById("category")
var delete_expense = document.getElementById("delete_expense")


expense.onclick=function(){
    localStorage.setItem("name",expense);
}
expense.onclick=function(){
    localStorage.setItem("name",description);
}
category.onclick=function(){
    localStorage.setItem("name",category);
}
delete_expense.onclick=function(){
    localStorage.removeItem("name");
}