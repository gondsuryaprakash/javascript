const reverseArray = (arr) => { 
    let start =0;
    let end = arr.length -1;
    while (start<end) {
        let tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }
    return arr; 
};

console.log(reverseArray([1,2,3,4]));