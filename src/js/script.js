'use strict';

//task1

const student = {
    name: 'Dmytro',
    age:28,
    grade: 10,
};
console.log('native options',student);

student.grade = 11;
student.course = 'Front End';
console.log('updated options',student)

//task2

const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 2001,
    publisher:{
        name: 'Wizarding World',
        location: 'Hogwarts',
    },
};
console.log('Harry Potter Info',book);

//task3

const movie = {
    title: 'Inglorious Basterds',
    director: 'Quentin Tarantino',
    year: 2008,
    genre: 'action',
};
for (const key in movie){
    console.log('Cycle example',key + ': '+ movie[key])
}

//task4
function Equality(object1, object2){
    for (let key in object1){
        const value1 = object1[key];
        const value2 = object2[key];
        if (value1 !== value2){
            return false;
        }
    }
    return true;
}

const person1 = {
    name: 'Dmytro',
    age: 28,
    nationality: 'Ukrainian',
    city: 'Odesa',
};

const person2 = {
    name: 'Dmytro',
    age: 28,
    nationality: 'Ukrainian',
    city: 'Odesa',
};

const results = Equality(person1,person2);
console.log('Results of equality',results);
console.log('Persons', person1, person2);

//task5

const animalsArray = [
    {Type: 'Elephant',
    Name: 'Doodler'},
    {Type:'Tiger',
    Name: 'Stipey'},
    {Type:'Lion',
    Name: 'King'},
    {Type:'Coyotte',
     Name: 'Bones'},
    {Type:'Monkey',
     Name:'Sniper'},
    {Type:'Rhino',
     Name:'Muerta'}
];
const newAnimal = {
    Type:'Turtle',
    Name: 'Flash'
};
animalsArray.push(newAnimal);
console.log(animalsArray);



