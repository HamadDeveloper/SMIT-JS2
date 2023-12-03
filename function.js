// declaring fucntion
//function addition(){  // parameterless function
   // let a = 10;
    // let b = 20;
    // let c = a + b;
   // console.log(c)
//}

// calling a function

 //function addTwoValues(a,b){  // parametrized function
 //d = a + b;
//  return d;
// }
// addition()
//  addTwoValues(100.,200)
//  addTwoValues(2,4)
//  addTwoValues(23,35)

//  // value pass to a funtion is called an argument

//  answer = addTwoValues(23,2)

 // write a function that takes an array of numbers 
 // and returns the array of squares of the numbers

 function arraySquare(arr){

    squared = []
    for (let a = 0; a<arr.length; a++){
        squared.push(arr[a]**2)
    }
    return squared;
 }

 answer = arraySquare([1,4,5,34,65,7,5]);
 console.log(answer)

 