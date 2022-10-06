// 3.	Write JS code to reverse a string. Store the string in a variable

var s = "Hello"
rev = "";
for (let i = s.length-1;  i >= 0; i--) {
    rev+=s[i];
}
console.log("reversed string is :"+rev) ;

