function myUpperCase(string){
    array = [];
    newArray = "";

    for (let i=0; i<string.length; i++){
        array[i]=string.charAt(i)
    }

    array.forEach(element => {
        console.log("foreach atteint")
        charCode = element.charCodeAt(0)
        if (charCode >= 97 && charCode <= 122) {
            newArray += String.fromCharCode(charCode - 32);
        } else {
            newArray += element;
        }
    });
    console.log(newArray)
}

myUpperCase("String")
