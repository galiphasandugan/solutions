

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

// const car ={
//     marka: "bmw",
//     model: [2020,2022]
//     sahip: function(){
//       console.log("hi");
//     }

// }
// console.log(car.marka);
// console.log(this.marka);
// console.log(car.model[0]);
// console.log(car.model[0]);

// !1.yöntem temprel literal
// ! non primitive veri yapısıdır



// const car ={
//   brand:"mercedes",
//   model :"2020",
//   speed :5,
//   color:["pink","black"]
// }
// console.log(car.brand);
// console.log(car);
// car.color.forEach((a)=> console.log(a));
// console.log(car.engine);
//   değer değiştirme
// car.speed =7
// car.color = "Morcivert"
// console.log(car);

// ! 2.yöntem square bracket


// const myKey = prompt(
//   "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."
// )

// alert(car[myKey])
// console.log(car);

// ! object constructor OOP

// function Personel(id,name,age ,salary){
//     this.id = id
//     this.name =name
//     this.age = age
//     this.salary =salary
// }

// const personel1= new Personel("12","ahmat",33,3000)
// const personel2= new Personel("12","ahmat",33,3000)
// console.log(personel1);



// const personel ={
//   name: "ahmet",
//   surname :1990,
//   drivingLicence:true,
//   calculateDate : function(){
//     return new Date().getFullYear() - dob
//   }

// }
// console.log(object);

// !JSON

// const team=[
//   {
//     name:"ahmet",surname:"can",job
//   }
// ]

// const dessert = { type: 'pie' };
// dessert.type = 'pudding';
// console.log(dessert);
// const mayişlar = [55, 8, 65, 9, 1, 15, 25]
// const zamliMaasToplami = mayişlar
//   .filter((m) => m >= 60 && m <= 100)
//   .map((m) => m * 1.1)
//   .reduce((t, m) => t + m)

// console.log("ZAMLI MAASLAR:", zamliMaasToplami)
// const toplamMayiş = mayişlar.reduce((a, deger) => a - deger,0)

// console.log("TOPLAM MAYIŞ:", toplamMayiş)
// a= a -deger a += deger
// a= a + deger
// a= a *deger

// grades = [85, 90, 75, 95,2]

// const totalGrades = grades.filter((a)=>a%2==0 && a)
// .map((b)=>b*2).reduce((sum,c)=>sum +c ,0)
// console.log(totalGrades);


const man = {
  name:"hasan",
  lastname:"can",
  birthday:1990,
   age: function(){
    return  new Date().getFullYear() - this.birthday; 
  },
  hobby:["football","basketball","voleyball"]
}
// console.log(man.age());
//  console.log(man["lastname"]);
// console.log(man.hobby);
// man.birthday =1995
// console.log(man);
// man.name="mehmet"
// console.log(man);
// man.hobby[0]="swimming"
// console.log(man.dogumyeri); 
// man.meslek="developer",
// man.adres={street:"23",
// apartmant:3} 
// console.log(man.adres.apartmant);
// console.log(man.adres.street);


// const myKey = prompt(
//   "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."
// )

// alert(car[myKey])

// !3- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
// function Personel(id, name, age, salary) {
//   this.a = id
//   this.b = name
//   this.age = age
//   this.salary = salary
//   console.log(this)
// }


// const person1 = new Personel("1234567890", "Ahmet Can", 33, 30000)
// const person2 = new Personel("123456745454", "Mehmet Veli", 23, 10000)

// console.log(person1)


// const data =[
//   {name:"ahmet",age:27,job:"developer"},
//   {name:"mehmet",age:30,job:"tester"},
//   {name:"fikret",age:33,job:"aws"},
//   {name:"galip",age:35,job:"syber"}
// ]
// // console.log(data);
// // console.log(data[0]);
// // console.log(data[0].age);
// // data[0].age = 30
// // data.forEach((a)=>console.log(a));
// // const dataMap = data.map((text)=>text.age +2 )
// // console.log(dataMap);

// const result= data.map((a)=>{
   
//     fullName: a.name.toUpperCase()
      
  
//   // return a.name.toUpperCase()
// })
// // console.log(data);
// console.log(result);

// // const teamFullName = team.map((p) => {
  
// //     fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
// //     age: p.age + 5,
  
// // })

// // //? Alternative way
// // const teamFullName1 = team.map((p) => ({
// //   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
// //   age: p.age + 5,
// // }))



// console.log(team)
// console.log(team[1])
// console.log(team[1].name) //? Mary
// console.log(team[2].age) //? 20

// console.log("************")

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
// team.forEach((p) => console.log(p.job))

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
// const personelAges = team.map((person) => person.age + 1)
// console.log(personelAges)

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const team = [
//   { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
//   { name: "Mary", surname: "Bary", job: "tester", age: 22 },
//   { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
// ]
// const teamFullName = team.map((p) => {
//   return {
//     fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//     age: p.age + 5,
//   }
// })

// //? Alternative way
// const teamFullName1 = team.map((p) => ({
//   fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//   age: p.age + 5,
// }))

// console.log(teamFullName1)
//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.

// const result = team.filter((a)=> a.age<=22).forEach((a)=>console.log(a.name));



// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
// };
// console.log(note);
// // traditional way
// const id = note.id;
// const title = note.title;
// const date = note.date;
// console.log(`${id} ${title} ${date}`);


// const { id, title, date } = note;
// console.log(id, title, date);
// const { id: noteId, title:isim, date } = note;
// console.log(noteId, isim, date);


// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
//   author: {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'johndoe@example.com',
//   },
// };
// const{title,id,date}= note;
// console.log(`${lastName}`);
// console.log(note.author.lastName);
// console.log(date);
// console.log(note.title);

// const {length} = "ahmet";
// console.log(length); // 8

// const date = [1970, 4, 20];
// traditional way
// const year = date[0];
// const month = date[1];
// const day = date[2];

// destructuring
// const [year, month, day]= date;
// console.log(day, month, year); // 20 4 1970
// // // skip the second item
// const [year2, , day2] = date;
// console.log(day2, year2); // 20 1970

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]
// const result = team.filter((a)=> a.age<=22).forEach((a)=> console.log(a.name));


// const result = team.filter((a)=> a.age<=22).map((a)=> a.name);
// console.log(result);

// const result = team.reduce((sum, x)=> sum  + x.age, 0)
// console.log(result/team.length);