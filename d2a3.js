// 3.	Write a standard JS function which takes variable number of arguments and prints each argument on the screen and also the number of arguments passed.

function arg(...a) {
   for (const element of a) {
    console.log(element);
   }

   console.log(`Total number of arguments : ${a.length}`)
    
}
console.log(arg(2,4,"hi",10))