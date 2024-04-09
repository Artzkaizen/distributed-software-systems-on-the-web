const person = {
    name: 'John',
    age: 30
};

const jobDetails = {
    title: 'Developer',
    department: 'Engineering'
};

const employee = {
    ...person,
    ...jobDetails,
    title: jobDetails.title,
    department: jobDetails.department
};

console.log(employee);
