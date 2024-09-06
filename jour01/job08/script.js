function myArraySort (arrayToSort, order) {

    arrayToSort.forEach((element, index) => {

        if (order === "ASC"){
            for (i=0; i<arrayToSort.length; i++){
                if (arrayToSort[index] < arrayToSort[i]){
                    var bigger = arrayToSort[index]
                    var smaller = arrayToSort[i]

                    arrayToSort[index] = smaller
                    arrayToSort[i] = bigger
                    }
                }        
        } 
        else if (order === "DESC")
        {
            for (i=0; i<arrayToSort.length; i++){
                if (arrayToSort[index] > arrayToSort[i]){
                    var smaller = arrayToSort[index]
                    var bigger = arrayToSort[i]

                    arrayToSort[index] = bigger
                    arrayToSort[i] = smaller
                    }
                }
        }
        }) 

    return arrayToSort

}

console.log(myArraySort([89,34, 2, 12], "ASC"))
console.log(myArraySort([89,34, 2, 12], "DESC"))