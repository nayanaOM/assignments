// JS prootype

class Person{
    constructor(fn,ln,age){
        this.fn=fn;
        this.ln=ln;
        this.age=age;
    }
    showPersonDetails(){
        return this.fn+" "+this.ln+" "+this.age;
    }
}
const p1 = new Person("nayana","O M",22);
console.log(p1);
console.log(p1.showPersonDetails());
console.log(JSON.stringify(p1));


