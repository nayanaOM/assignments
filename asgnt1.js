// 1.	Write JS code to display all the prime numbers between 5 and 50. Log the output to the browser console. 

for (let i = 5; i <= 50; i++) {
   var temp = 0;
        for (let j = 2; j <= i ; j++) {
        if (i%j==0 && j!=i) {
            temp = 1;
            
        }    
        if (temp==0) {
            console.log(i);
            break;
        }
    }
}