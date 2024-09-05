function myCountChar(string, char){

    var charIn=0
    for (i=0; i<string.length;i++){
        if(string[i]===char){
            charIn++
        }
    }
    return charIn

}

console.log(myCountChar("bonjour", "o"))