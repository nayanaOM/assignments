// 9.	Write a JS function which takes 3 arguments, namely arg1, arg2 and arg3. Call the function by passing an array of 3 elements to it. The function must return the maximum value from the array passed to it
/*
arr=[3, 2, 5];
function test(a1,a2,a3) {
    a1 =arr[0];
    a2 =arr[1];
    a3 =arr[2];
    if (a1>a2 && a1>a3) {
        console.log(`largerst value is : ${a1}`);
    }
    else if(a2>a3)
    {
        console.log(`largerst value is : ${a2}`);
    }
    else
    {
        console.log(`largerst value is : ${a3}`);
    }
}
test(arr);

*/


arr=[3, 2, 5];
function test(a1,a2,a3) {
    if (a1>a2 && a1>a3) {
        console.log(`largerst value is : ${a1}`);
    }
    else if(a2>a3)
    {
        console.log(`largerst value is : ${a2}`);
    }
    else
    {
        console.log(`largerst value is : ${a3}`);
    }
}
test(...arr);