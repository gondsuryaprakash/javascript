const binarySearch = (arr, low, high, key) => {

    if (high < low) {
        return -1;
    }
    else {
        let mid = Math.floor((high + low)/2) ;
        if (key === arr[mid]) {
            return mid;
        }
        else if (key > arr[mid]) {
            return binarySearch(arr, mid + 1, high, key)
        }
        else {
            return binarySearch(arr, low, mid - 1, key);
        }
    }
};

console.log(binarySearch([6,7,8,9,10], 0, 4, 8));  //2 
