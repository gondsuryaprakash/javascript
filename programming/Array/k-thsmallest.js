const kthsmallest = (arr,k)=> {
    console.log();
    return arr.sort((a,b)=> a-b)[k-1];
};

console.log(kthsmallest([7, 10, 4, 3, 20, 15],2));