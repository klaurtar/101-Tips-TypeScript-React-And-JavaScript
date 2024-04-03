const myArr: string[] = ['My', 'favorite', 'food', 'is', 'steak'];

const myNewArr: string[] = myArr.with(4, 'pasta');

console.log(myArr); // ['My', 'favorite', 'food', 'is', 'steak']
console.log(myNewArr); // ['My', 'favorite', 'food', 'is', 'pasta']
