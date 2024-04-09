const people = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Emily Davis', age: 35 },
    { name: 'Jannet Jones', age: 22 }
];

// Log the result after each task:

// 1. Sort people by age...
people.sort((a, b) => a.age - b.age);
console.log(people);

// 2. Find a person whose name starts with 'Jan'...
const person = people.find(person => person.name.startsWith('Jan'));
console.log(person);

// 3. Joining all names together to form a single string separated by a comma...
const allNames = people.map(person => person.name).join(', ');
console.log(allNames);