//8.	Write a JS function which returns the sum of any number of arguments passed. If no arguments are passed, the function must return a zero.

function sum(...a)
{
s = 0;
for (const element of a) {
    s+=element;
}
console.log(`sum of all arguments are : ${s}`);
}
sum(2,2,2,2);
