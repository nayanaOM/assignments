// 2.	Write JS code to reverse the digits of a number. Store the number in a variable. 

num = 40208;
rev = 0;
while (num > 0) {
    rem = num%10;
    rev = (rev * 10) + rem ;
    num = Math.floor(num/10);
}
console.log("reversed number is :"+rev) ;
