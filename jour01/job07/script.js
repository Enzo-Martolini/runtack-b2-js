function myClosestToZero (array)
{
    var arrayDiff = []
    var closest = array[0];


    array.forEach(element => {

        if (element > 0)
        {
        for(i=0; element-i!=-1; i++)
        {
            if (element-i===0){
                arrayDiff.push(i)
            }
        }
        } else {
            for(i=0; element+i!=0; i++)
            {
                if (element+i===0){
                    arrayDiff.push(i)
                }
            }
            
        }

    });

    console.log(arrayDiff)

    arrayDiff.forEach(element => {
        if (closest > element){
            closest=element
        }
    })

    return closest;



    

}

console.log(myClosestToZero([5,10,-3]))