const sum =(grid) => { 
    const sumOfGrid = grid.reduce((curr, next)=> {
        return curr + next.reduce((curr1, next1)=> {
            return curr1 + next1;
        },0);
    },0);
    return sumOfGrid;
};


const grid = [[1,0,9,0,1],
    [0,1,0,1,0],
    [-1,-1,-1,-1,-1]];


console.log(sum(grid));
