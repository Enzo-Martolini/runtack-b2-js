function myPrimeList (limit){

    isPrimeArray = []

    for (i=2; i<limit; i++){
        isPrime = true;

        for (j=2; j<i; j++){
            if (i%j===0){
                isPrime = false
            } 
        }

        if (isPrime){
            isPrimeArray.push(i)
        }
    }

    return isPrimeArray;

}

console.log(myPrimeList(300))