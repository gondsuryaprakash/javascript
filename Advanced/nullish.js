const calculatePrice=(price,tax,description)=>{
    tax =tax || 0.5;
    const totalprice=price*(1+tax);
    console.log(`${description} ${totalprice}`);
};


calculatePrice(200,2,'First Item totalPrice');    // First Item totalPrice 600
calculatePrice(200,0,'Second Item totalPrice');   //Second Item totalPrice 300
calculatePrice(200,undefined,'Third Item totalPrice');   //Third Item totalPrice 300



//Use of Nullish Operator

const calculatePriceWithNullish=(price,tax,description)=>{
    tax =tax ?? 0.5;
    const totalprice=price*(1+tax);
    console.log(`${description} ${totalprice}`);
};

calculatePriceWithNullish(200,2,'First Item totalPrice');    // First Item totalPrice 600
calculatePriceWithNullish(200,0,'Second Item totalPrice');    // ??
calculatePriceWithNullish(200,undefined,'Third Item totalPrice');  // ?? 