const createMessage = (person) => {
    const { name, age, city = 'world' } = person;

    const message = name.indexOf('John') === 0 && name.indexOf('Doe') === name.length - 3 
    ? 'Hello, ' + name + '! Your age is ' + age + ' and you live in ' + city + '.' 
    : 'Welcome, guest!';

    return message;
}

const people = [{ name: 'John Doe', age: 30, city: 'Los Angeles' }, { name: 'Jane Doe', age: 25 }];
const messages = people.map(person => console.log(createMessage(person)))
