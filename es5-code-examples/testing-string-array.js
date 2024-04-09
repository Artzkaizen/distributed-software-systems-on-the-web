const fruits = ['apple', 'banana', 'cherry'];

console.log('Includes banana:', fruits.includes('banana'));
console.log('Every fruit has more than five characters:',!fruits.map(fruit => fruit.length > 5).includes(false));
console.log('Some fruit has more than five characters:',fruits.map(fruit => fruit.length > 5).includes(true));

