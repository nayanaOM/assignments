//6.	Write JS code to find the sum of all even numbers in an array of 10 numbers. In case there are no even numbers, log a message to the browser console saying No even numbers found. 

let arr=[2,4,5,6,7,8,9,12,34,3];
sum=0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 ==0 )
    {
        sum = sum + arr[i];
    }
    else
    {
    console.log("No even numbers found. ");        
    }

}
console.log(sum);