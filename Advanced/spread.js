// Create a Clone of an Object

const user = {
    name: 'Surya',
    age: 26,
    address: {
        vill: 'Rampurmeer',
        post: 'Patrengwa',
        dist: 'Maharajganj',
    }
};

const clone = { ...user };
console.log(clone);

// Add property to user and update existing object

const updatedUser = { ...user, salary: 16000, userName: 'Rahul', };
console.log('updatedUser', updatedUser);


// update the nesting object

const update1 = {
    ...user, address: {
        ...user.address,
        vill: 'Ledwa'
    }
};

console.log('update1', update1);


// Combine (or Merge) two Objects


const department = {
    id: '001',
    Shift: 'Morning'
};

const multipleObject = {...user, ...department};
console.log('multipleObject',multipleObject);