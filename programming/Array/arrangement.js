const arrangeMent = (arr) => {

    const s = new Set();
    arr.map(el => {
        if (el != -1) { s.add(el); }
    });
    for (var i = 0; i < arr.length; i++) {
        if (s.has(arr[i])) {
            arr[i] = i;
        }
        else {
            arr[i] = -1;
        }
    }
    return arr;
};

console.log(arrangeMent([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]));
