// array rotation by d 


const leftRotation = (arr)=>{
    let temp = arr[0];
    for(var i=0; i<arr.length -1; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp; 
};


const rotationByDTimes = (d,arr)=> {
    for(var i=0;i<d; i++) {
        leftRotation(arr);
    }
    return arr;
};

const arr = rotationByDTimes(2,[1,2,3,4,5]);
console.log(arr);




