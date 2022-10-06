// 8.	Write JS code to find the number of vowels in the string CITIUSTECH. If the vowel is repeated, it must be counted as 1. 

let str="CITIUSTECH";
let d = {};
c = 0;
for(let i=0;i<str.length;i++){
    if(str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U'){
        c+=1;
        d[str.charAt(i)]=c;
    }

}
console.log(d);