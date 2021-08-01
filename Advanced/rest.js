// The Rest Parameter in JavaScript

const user = {
    name: 'Surya',
    age: 26,
    address: {
        vill: 'Rampurmeer',
        post: 'Patrengwa',
        dist: 'Maharajganj',
    }
}; 


const {name, ...rest} = user;
console.log('name',name);
console.log('rest',rest); 