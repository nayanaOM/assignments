// 7.	Write JS code to find the factorial of each number inside an array of 5 elements. The factorial of each number must then be stored in another array of the same size. Print the result array on the console. 

var a = [3,4,5,6,7];
var a1 = [];
function fact(n){
    return n*(n-1)*(n-2);
    }
for (let i = 0; i < a.length; i++) {
    res = fact(a[i]);
    a1[i]=res;
}
console.log(a1);