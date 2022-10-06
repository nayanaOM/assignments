//4.	Write a JS arrow function named Login() which takes a username and password. In case any of the arguments or both are not passed, the default values must be CT and CT respectively. 
/*
function login(a="CT", b="CT") {
    console.log(`username is : ${a}`);
    console.log(`pwd is : ${b}`);
}
login("nayana","na@26");
login("nayana");
login();
*/


let login = (a="CT", b="CT") => console.log(`username and pwd are : ${a} ${b}`);
login("nayana","na@26");
login("nayana");
login();

