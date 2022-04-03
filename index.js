const fruit = ['apple', 'banana', 'orange', 'pear', 'strawberry'];

const [apple, banana, ...rest] = fruit;

console.log(rest);