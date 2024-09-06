textDisplayer = document.getElementById("text-displayer")
inputText = document.getElementById("input-text")
btnBold = document.getElementById("btn-bold")
btnItalic = document.getElementById("btn-italic")
btnClear = document.getElementById("btn-clear")

btnItalic.addEventListener("click", function (){
    if (textDisplayer.style.fontStyle==='italic'){
    textDisplayer.style.fontStyle = 'normal'
    } else {
    textDisplayer.style.fontStyle = 'italic'
    }
});

btnBold.addEventListener("click", function (){
    if (textDisplayer.style.fontWeight==='bold'){
    textDisplayer.style.fontWeight = 'normal'
    } else {
    textDisplayer.style.fontWeight = 'bold'
    }
});

btnClear.addEventListener("click", function(){
    textDisplayer.textContent = ""
    inputText.value = ""
})

inputText.addEventListener("input", function (){
    textDisplayer.textContent = inputText.value
});