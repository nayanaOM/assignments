//10.	Write JS code to determine how many digits are repeated in the number 7312140905
var num=7312140905;
function ass(num){
    var result=0;
    var count=Array(10).fill(0);
    while(num>0){
        var rem=num%10;
        count[rem]++;
        num=Math.floor(num/10);
    }
    for(var i=0;i<10;i++){
        if(count[i]>1){
            result++
        }
    }
    return result;
    }
console.log(ass(num));