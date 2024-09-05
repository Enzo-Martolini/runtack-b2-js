function mySquareArray (array){
    i=-1;

    array.forEach(element => {
        i++
        element = element*element
        array[i]=element
    });

    return array

}

console.log(mySquareArray([2,5,3]))