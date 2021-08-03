// Creating the class with help of the constructor 
class User {
    constructor(name){
        this.name=name;
    }
    sayHi(){
        console.log(`Hello ${this.name}`);
    }
}
const newUser = new User('Surya');
newUser.sayHi();

console.log(User.prototype.sayHi);

//Getter and Setter in class

class Animal {
    constructor(name) {
        this.name = name;
    }

    get name(){
        return this._name;
    }
    
    set name(value) {
        if(value.length<4) {
            console.log(`${value} is too sort`);
        }
        this._name = value;
    }
    running(){
        console.log(`${this.name} is running so fast`);
    }
}

const dog = new Animal('Dogggy');
console.log(dog.name);
dog.running();

