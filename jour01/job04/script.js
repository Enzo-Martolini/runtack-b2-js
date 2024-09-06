function myArraySum (array){
    count = 0
    array.forEach(element => {
        count += element
    });
    return count
}

console.log(myArraySum([2,5,3]))