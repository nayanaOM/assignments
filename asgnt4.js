// 4.	Write JS code to create an array of 10 numbers. Find the first two maximum numbers in the array 

const a = [1,8,6,5,7,4,9,3,10,2];
var f = 0, s = 0;
for (let i = 0; i < a.length; i++) {
    var current = a[i];
    if (f<current) {
        s=f;
        f=current;
    }
    else if(s<current){
        s=current;
    }
}
console.log(' first two  maximum numbers in the array  '+f+' ' +s);




