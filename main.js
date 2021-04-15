// alert('hello world');

//console types
console.log('hello world');
console.error('this an error');
console.warn('this is a warning');

//variables
// let, const, var 
 
let age = 40;
age = 41;
console.log(age);

let score = 400;
score = 450;
console.log(score);

//data types
//String, numbers, boolean, null, undefined
const nam = "premila";
const isCool = true;
console.log(typeof nam);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof y);

//concatenatiom
console.log( "My name is " + nam + ' my age is '
+ age); 
//template literal
const hello =`My name is ${nam} and Iam ${age}`;
console.log(hello)
//string properties and methods
const s = "hello world";
const string = "tech,computers,IT,code";
console.log(s.length)
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.split(""));
console.log(string.length);
console.log(s.split(' '));
console.log(s.split(' ,'));
console.log(string.split(''));
console.log(string.split(','));

// arrays and arrays method 
const fruits  = ['apple', 'banana', 'oranges', 'pears','10', 'true'];
console.log(fruits);
console.log('this is my fruits array console'+ " "  +fruits[1], fruits[2]);
console.log(fruits.indexOf('pears'));
fruits[7] = 'grapes'
console.log(fruits);
fruits.push('mango');
console.log(fruits);

//objects and objects literals, // name is the key, John is value,// this should be an array because a person can have more than one hobby 

const person = {
    fristName:"John",
    lastName: "smith",
    age: 30,
    hobbies:["music", "singing"],
    address:{ street: " 50 main street",
            city: "Westport",
            state:"CT"
        }
};
 console.log(person)
 console.log(person.fristName);
 console.log(person.hobbies[0]);

 //array of objects

 const todos = [
     {
         id:1,
         text:"Take out trash",
         isCompleted: true
     },
     {
         id:2,
         text: 'Meet with manager',
         isCompleted: false
     },
     {
         id:3,
         text: "Dentist Appt",
         isComplete: true

     },
 ];
 console.log(todos);
 console.log(todos[1].text);
 console.log(todos[0].isCompleted);