var array = ['NEW', '1111', 'serial1', 'serial2', 'NEW', '2222', 'serial3', 'serial4'];

const output = array.reduce((prev,curr,index,arr)=>{
    if(curr==='NEW') {
        return prev.concat({
            order_id: arr[index+1],
            serial_numbers: [arr[index+2], arr[index+3]]
        });
    }
    return prev;
},[]);

console.log(output);