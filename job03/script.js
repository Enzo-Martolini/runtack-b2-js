function myIsInString (haystack, needle){

 for (let i=0; i<haystack.length;i++){

    var count = 0;
    var j = 0;

    if(haystack[i]===needle[0]){
        for (j=0; j<needle.length; j++){
            console.log("haystack : " + haystack[i+j])
            console.log("needle : " + needle[j])
            // console.log("j :" + j)
            if (haystack[i+j]===needle[j]){
                count++;
            }
        }
    }

    if (count === needle.length){
        return true
    }

    if (i===haystack.length-1){
        return false
    }

 }

}

console.log(myIsInString("Hello", "lla"))
