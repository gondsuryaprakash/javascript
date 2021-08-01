// Getting value from the User Object
const user = { 
    name: 'Alex',
    address: '15th Park Avenue',
    age: 43
};

const { name } = user;
console.log(name);

//Add a New Variable & Default Value

const {age, salary=62000} = user;
console.log(user,age,salary);

// Add Aliases  Adding the alias 

const {address : permanentAddress} =user;
console.log('permanentAddress',permanentAddress);
//console.log(address); //Give the error 


//Nested Object destucturing

const newUser = { 
    name: 'Alex',
    address: '15th Park Avenue',
    age: 43,
    department:{
        name: 'Sales',
        Shift: 'Morning',
        address: {
            city: 'Bangalore',
            street: '7th Residency Rd',
            zip: 560001
        }
    }
};

const {department: {address :{
    city
}}} = newUser;
console.log(city);