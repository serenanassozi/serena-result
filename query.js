function select(tree){
  var   selected = tree.innerText 
  console.log(selected)
  localStorage.setItem("rate",selected.toString())
  const par = tree.closest("li")
  const fobe = document.querySelectorAll("li")
  fobe.forEach((it)=>{
    it.classList.remove("active")
  })
  par.classList.add("active")
}
function open(){
    var nums = localStorage.getItem("rate")
    var span = document.querySelector(".the")
    span.innerText = nums
}