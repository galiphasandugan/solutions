

// const fatih ={
//     age:35,
//     lastName :"aksoy",
//     fullname: function(){
//         return `${age} ve ${lastName}`
//     }
// }
// console.log(fatih);


// const person = new Object();

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 22;
// console.log(person);
// const person ={
//     firstName:"John",
//     lastName: function(){
//         console.log("hi");
// }
// const itSchool = {
//     name: 'Clarusway', 
//     location: 'U.S.', 
//     established: '2019', 
//   };
//   console.log(itSchool.name); // Expected Output : 'Clarusway'
//   console.log(itSchool[2]);




//   let students = [
//     { id: 1, name: "Ahmet", grades: [85, 90, 75, 95,2] },
//     { id: 2, name: "Ayşe", grades: [70, 80, 65, 75] },
//     { id: 3, name: "Mehmet", grades: [95, 90, 85, 80] },
//     { id: 4, name: "Elif", grades: [80, 85, 90, 75] },
//     { id: 5, name: "Ceren", grades: [90, 95, 85, 80] }
//   ];

// console.log(students[0].grades);

//   const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }
// console.log(student.marks.science);


// const dog = {
//     name: "Rocky",
//     legs: 4,
//     tail: 1,
//     qualities: ["loyalty","companionship"]
//     };
  
//   console.log(dog.name);
//   console.log(dog["name"]);
//   console.log(dog["qualities"]);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


// let person1 = new Person("John", "Doe");
// console.log(person1); // { firstName: 'John', lastName: 'Doe'}
// let person2 = new Person("Jane", "Doe");
// console.log(person2); // { firstName: 'Jane', lastName: 'Doe'}

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//       // return this.firstName + " " + this.lastName;
//       // or using template lateral notation
//       return `${this.firstName} ${this.lastName}`;
//     },
//     greet: function() { console.log('hello'); },
//     greet2() { console.log('hello2'); }
//   };
//   console.log(person.fullName()); // John Doe
//   person.greet(); // hello
//   person.greet2(); // hello2


//   function Person () {
//     this.name = 'John',
//     this.age = 23
// }
// const person = new Person();
// // checking the prototype value
// console.log(Person.prototype);

// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//     current(){
//        return "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
//     }
//   }
//   myDog = new Dog("Buldog", 4) 
//   console.log(myDog.current());