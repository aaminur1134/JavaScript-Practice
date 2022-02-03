// let student = {
//     name : "aaminur__",
//     Roll : 373898,
//     Reg  : 227177,
//     marks:{
//         math : 49,
//         English : 65
//     }
// }


// console.log(student.marks.math);

// let person = {
//     name : 'Jonh Lee',
//     id : 356446,
//     myFunc: function (){
//         console.log('HELLO! ', this.name);
//     }
// }

// person.myFunc();


// let person = {
//     firstName : 'Monica',
//     lastName : 'Mac',
//     get getName(){
//         // console.log('Hello!');
//         return this;
//     }
// }
// // console.log(person.lastName);
// // console.log(person.firstName);
// console.log(person.getName);



// set 

// let personName = {
//     nameIs : 'Monica',
//     set setName(newName){
//         return this.nameIs = newName;
//     }

// }
// console.log(personName.nameIs);
// personName.setName = 'Sarah';

// console.log(personName.nameIs);

// prototype 

function person() { 
    this.name = 'aaminur';
    this.age = 22;
}

let per1 = new person();
let per2 = new person();

person.prototype.gender = 'male'
console.log(person.prototype);

console.log(per1.gender);
console.log(per2.gender);





