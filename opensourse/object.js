const test = [{
    Title: 'AAAA',
    Year: 'BBB',
    Runtime:'100min',
    Director:'CCC'
  }]

  
const someElement = test.reduce((acc, curr)=>{
    const { Title, Year } = curr;
    return acc.concat(Title,Year);
},[]);

console.log(someElement);