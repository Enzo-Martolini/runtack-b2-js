countDisplayer = document.getElementById("count-displayer")
btnCount = document.getElementById("add-count-btn")

btnCount.addEventListener("click", function (){
    count = countDisplayer.textContent
    count++
    countDisplayer.textContent = count
});