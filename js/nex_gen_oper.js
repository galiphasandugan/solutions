

// ! STARTS

// const car ={
//     brand:"bmw",
//     model: 2020,
//     engie: 2000,
//     colors : ["pink","blue"]
// }
// !1 .ci yöntem square bracket
// const brand = car.brand
// console.log(brand);
// ! 2.yöntem (square bracket)

// console.log(car["model"]);

// ! 3.yöntem destructure

// const {brands ,model,colors}= car
// console.log(brands);
// console.log(colors);

const cars = {
    car1: {
      name: "BMW",
      model: 1990,
      engine: 1.6,
    },
    car2: {
      name: "Mercedes",
      model: 2022,
      engine: 2.0,
    },
    car3: ["anadol", "togg", "devrim"],
    car4: "kağnı",
  }

//   const {car2,car1}=cars;
//  const{name:c1name,model:c1model} = car1
//  const{name:c2Name,model:c2MOdel} = car2
// console.log(c1name);


// const {
//   car1: { nameCar1, modelCar1, engineCar1 },
//   car2: { nameCar2, modelCar2, engineCar2 },
// } = cars

const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "Josh",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ]
//   team.forEach((a)=>{
//  const {name ,surname,age,job}= a
//     console.log("NAME:", a.name)
//     console.log("NAME:", a.surname)
//     console.log("NAME:", a["job"])
//     console.log("NAME:", a["age"])

//   })
  const getProduct =()=>{

    return{
        id:"124",
        pName:"NIKE",
        price: 300,
        stock: 1000,
    }
  }
let {pName ,price,stock} = getProduct()

// console.log(pName);
// console.log("NAME:", pName);
// console.log("PRODUCT NAME",pName, "PRICE",stock);
// stock =stock-100
// console.log(stock);

const data = {
    id:"123",
    pName :"NIKE",
    price:300,
 }
// ! normal destructure
// const print = function(data){

//     const {id, pName ,price} = data
//     console.log(pName, price);
//     console.log(pName, price);
// }

// print(data)


// ! havada destructure

// const print = function({id, pName ,price}){

//     console.log(pName, price);
// }
// print(data)

// const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"]

// const [ismo, ali, ] = names
// console.log(ali);

// * rest(...) geri kalanlar ve dök saç ARRAY KULLANIMI
// const araclar = ["bmw","mercedes","ferrari","rover","lambo"]

// const [araba1,araba2,...gerikalanlar] = araclar
// console.log(araba1);
// console.log(gerikalanlar);



// * OBJELERDE REST KULLANIMI 

// const kisi ={
//     ad: "canan",
//     soyad:" cano",
//     yas:33,
//     meslek: "tester",
// }

// const {meslek, ...bilgi}=kisi

// console.log(meslek);
// console.log(bilgi);





// * fonksiyonlarda rest

// const topla =(a,b)=> a+b 
// console.log("sonuc",topla(2,5,10,4));

// const toplamAl = (...sayılar) => {
//     console.log(sayılar);
//     return sayılar.reduce((v,t)=> v + t,0)

// }
// console.log("S",toplamAl(2,5,10,4));


// * SPREAD

// const ucanAraclar = ["drone", "heli", "ucak"]
// const karaAraclari = ["Tir", "Araba", "Kamyonet", "Bisiklet"]
// const tasıtlar = [...ucanAraclar, ...karaAraclari]
// const tasıtlar1 = [...karaAraclari, ...ucanAraclar]
// console.log(tasıtlar);
// console.log(tasıtlar1);


// const cumle = "Olmak ya da Olmamak"
// const karakter = [...cumle]
// console.log(karakter);

// * Math.min
console.log("MAX :", Math.max(1,3,4,-1,4));
const rakamlar =[23,34,45,66,72];

// * Math.min
console.log("mın:", Math.min(...rakamlar));

// * array copy 
const myNumbers =[4,5,6]
const herNumbers =[1,2,3, ...myNumbers]
const hisNumbers = [...herNumbers]
// console.log(herNumbers,myNumbers);
// console.log(hisNumbers);
// console.log(herNumbers);

// hisNumbers.push(7)
// console.log(myNumbers);
// console.log(herNumbers);
// console.log(hisNumbers);



// // * sığ capyalama

// const theirNumbers = hisNumbers
// console.log(theirNumbers);
// theirNumbers.push(8)
// console.log(theirNumbers,hisNumbers);

const firstObj = { a: 1, b: 2, c: 3 }
const secondObj = { a: 2, d: 3, c: 4 }
const copiedFirstObj = {...firstObj}
console.log(copiedFirstObj);


copiedFirstObj.a = 44

console.log(copiedFirstObj,firstObj);