//Object references and copying

let user1={name:'Surya',age:26};
let clone1=user1;
clone1.name='Rahul';
console.log(user1); //{ name: 'Rahul', age: 26 }

// cloning of object with the help of the assign()

let user2={name:'Surya',age:26};
let clone2=Object.assign({},user2);

clone2.name='Sunil';
console.log(user2); //{ name: 'Surya' }
console.log(clone2); //{ name: 'Sunil'}
 
// cloning in nested object
let user3={name:'Surya',addr:{
    pin:273303,
    landmark:'Nichlaul Road'
}};

let clone3=Object.assign({},user3);
clone3.addr.pin=273307;
console.log(user3); // ?? 
console.log(clone3); // ??

//Deep Cloning in nested object

let clone4=JSON.parse(JSON.stringify(user3));
clone4.addr.pin=100291;
console.log(user3); // ??
console.log(clone4); // ??
