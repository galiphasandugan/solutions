
// const grade = prompt("Please enter your grade")
// const grade = 99
// let result = ""
// ​
// if (grade >= 0 && grade<=25) {
//     result = "FF"
// }else if(grade>=26 && grade<=45){
//     result = "DD"
// }else if (grade>=46 && grade<=65){
//     result = "CC"
// }else if (grade>=66 && grade<=75){
//     result = "BB"
// }else if (grade>=76 && grade<=90){
//     result = "BA"
// }else if (grade>=91 && grade<=100){
//     result = "AA"
// }else{}
// ​
// if (grade>= 0 && grade <= 100) {
//     console.log(`Your grade is ${grade}. Your result is ${result}`);
// }else if (grade < 0) {
//     console.log("Your grade should be bigger than or equal 0. Please enter your grade correctly");
// }else if (grade > 100) {
//     console.log("Your grade should be lower than or equal 100. Please enter your grade correctly");
// }else{
// }
// console.log("-----");
// ​
// ​
// ​
// ? SORU 2
// const month = prompt("Please enter any month name. (English keyword. Please dont use 'ç,ğ,ı,İ,ö,ü,ş')").toLocaleLowerCase()
// const month = "nisan";
// ​
// switch(month){
//     case "ocak" : 
//         console.log(1);
//         break;
//     case "subat" : 
//         console.log(2);
//         break;
//     case "mart" : 
//         console.log(3);
//         break;
//     case "nisan" : 
//         console.log(4);
//         break;
//     case "mayis" : 
//         console.log(5);
//         break;
//     case "haziran" : 
//         console.log(6);
//         break;
//     case "temmuz" : 
//         console.log(7);
//         break;
//     case "agustos" : 
//         console.log(8);
//         break;
//     case "eylul" : 
//         console.log(9);
//         break;
//     case "ekim" : 
//         console.log(10);
//         break;
//     case "kasim" : 
//         console.log(11);
//         break;
//     case "aralik" : 
//         console.log(12);
//         break;
//     default:
//         console.log("You didnt write correctly. Please try again.");
// }
// ​
// ​
// //* Örneği tersten tekrar yapıyorum
// ​
// const numberOfMonth = prompt("Please enter the number of month")
// const numberOfMonth = "4"
// let monthName = ""
// ​
// switch(numberOfMonth){
//     case "1" : 
//         monthName = "ocak"
//         break;
//     case "2" : 
//         monthName = "subat"
//         break;
//     case "3" : 
//         monthName = "mart"
//         break;
//     case "4" : 
//         monthName = "nisan"
//         break;
//     case "5" : 
//         monthName = "mayis"
//         break;
//     case "6" : 
//         monthName = "haziran"
//         break;
//     case "7" : 
//         monthName = "temmuz"
//         break;
//     case "8" : 
//         monthName = "agustos"
//         break;
//     case "9" : 
//         monthName = "eylul"
//         break;
//     case "10" : 
//         monthName = "ekim"
//         break;
//     case "11" : 
//         monthName = "kasim"
//         break;
//     case "12" : 
//         monthName = "aralik"
//         break;
//     default:
//         console.log("You didnt write correctly. Please try again.");
// }
// console.log(monthName);
// console.log("-----");
// ​
// ​
// ​
// ​
// ​
// ? SORU 3
// const number1 = prompt("Please enter first number")
// const number2 = prompt("Please enter second number")
// const number3 = prompt("Please enter third number")
// ​
// const number1= 1;
// const number2= 2;
// const number3= 3;
// ​
// ​
// const total = number1 + number2 + number3;
// const multiplication = number1 * number2 * number3;
// ​
// console.log(`${total} is total`);
// console.log(`${multiplication} is multiplication`);
// ​
// let lower = number1;
// if (number2 <= number1) {
//     lower = number2
// }
// if (number3 <= lower) {
//     lower = number3
// }
// ​
// console.log(`${lower} is lower`);
// ​
// let biggest = number1;
// if (number2 >= number1) {
//     biggest = number2
// }
// if (number3 >= biggest) {
//     biggest = number3
// }
// ​
// console.log(`${biggest} is biggest`);
// console.log("-----");
// ​
// ​
// ​
// ? SORU 4
// const num = prompt("Please enter the number")
// const num =1;
// ​
// const oddOrEven = num%2>0 ? `${num} is Odd Number ` : `${num} is Even Number `;
// console.log(oddOrEven); 
// ​
// console.log(num%2>0 ? `${num} is Odd Number ` : `${num} is Even Number `); //* Alternative
// console.log("-----");
// ​
// ​
// ​
// ​
// //? SORU 5
// ​
// const choose = prompt("Please enter    '1'    Celsius  from Fahrenheit" + "\n" + "Please enter    '2'    Fahrenheit from Celsius ")
// let resultOfConversion = "";
// ​
// if(choose == 1){
//     const fahrenheit = prompt("Please enter fahrenheit degree")
//     resultOfConversion = (fahrenheit-32)/(1.8);
// }else if (choose ==2) {
//     const celsius = prompt("Please enter celcius degree")
//     resultOfConversion = (celsius*(1.8))+32
// }else{
//     console.log("Please enter your choose correctly");
// }
// ​
// if (resultOfConversion != "") {
//     console.log(resultOfConversion.toFixed(1) + " " + "degree"); // Virgülden sonra 1 basamak alır
// }
// console.log("-----");

// ? 3 FARKLI SAYININ ÇARPIMININ SONUCUNU DOĞRU DÖNDÜREN İF-ELSE YAPISINI YAZINIZ.

// let num1 =  -2;
// let num2 = -4;
// let num3 = -2 ;

// if(!num1<0 || num2<0 || num3 <0 ){
//     console.log("++");
// }else if(num1<0 || !num2<0 || num3 <0 ){
//     console.log("++");
// }else if(num1<0 || num2<0 || !num3 <0 ){
//     console.log("++");
// }else if(num1<0 || num2<0 || num3 <0 )
// console.log("--");

//? 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)


// const yas =Number(prompt('yasınızı girin'));

// const result =  
// yas > 18 
//     ? "oy kullanabilir"
//     : "oy kullanamaz";
// console.log(result)



// ? 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)

// const yas = Number(prompt("please enter your age"));

// * yaş 18 den büyükse  ? den sonra gelen ifadeyi yazdırır değilse  : işaretinden sonra gelen ifadeyi yazdırır.

// const result = yas > 18 ? "oy kullanabilir" : "oy kullanamaz";
// console.log(result);
//! alternatif çözüm
//  yas > 18 ? console.log("oy kullanabilir") : console.log("oy kullanamaz");




// 2- Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?
//  Not:
//  90'dan büyükse AA.
// - 80'den büyük yada 90'a eşitse AB,
// - 70'den büyük yada 80'a eşitse BB,
// - 60'den büyük yada 70'a eşitse BC,
// - 50'den büyük yada 60'a eşitse CC,
// - 40'den büyük yada 50'a eşitse CD,
// - 30'den büyük yada 40'a eşitse DD,
// - 30'dan küçük yada eşitse FF ,

// if (mark > 90) {
//   console.log("AA");
// } else if (mark > 80) {
//   console.log("AB");
// } else if (mark > 70) {
//   console.log("BB");
// } else if (mark > 60) {
//   console.log("BC");
// } else if (mark > 50) {
//   console.log("CC");
// } else if (mark > 40) {
//   console.log("DC");
// } else if (mark > 30) {
//   console.log("DD");
// } else if (mark <= 30) {
//   console.log("FF");
// }


// 3- Artık yıl sorusu

// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

// Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız

// const year = Number(prompt("lütfen yıl giriniz"));
// const result = year % 4 || (!(year % 100) && year % 400);
// console.log(Boolean(result));

// if (!result) {
//   console.log("bu yıl artık yıldır");
// } else {
//   console.log("bu yıl artık yıl değildir");
// }

// ! 2.Cİ ÇÖZÜM

// const year = Number(prompt("lütfen yıl giriniz"));
// const result = year % 4 != 0 || !(year % 100 == 0 && year % 400 != 0);

// if (result) {
//   console.log("bu yıl artık yıldır");
// } else {
//   console.log("bu yıl artık yıl değildir");
// }
// const year = Number(prompt("lutfen yil giriniz"));
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(" artik yil");
// } else {
//   console.log("artik degil");
// }
// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******");

//? 2 kosullu
// if (calismaSuresi >= 10) {
//   // maas = Math.trunc(maas * 1.1)
//   maas = Math.round(maas * 1.1)
//   console.log("Zamli maasiniz:", maas)
//   console.log(`Zamli maasiniz: ${maas}`)
// } else {
//   console.log("Uzgunuz maasinaza zam yapamayirouz", maas)
// }
// console.log("Güle güle")

//? Tek kosullu
// let sayı = prompt("Bir sayı girniz");
// console.log(typeof sayı);

// console.log(Number(""));
// console.log(Number("0"));
// console.log(Number(null));
// console.log(Number("25"));
// console.log(Number("25"));
// console.log(Number(25));
// const a = "a";
// let b = Number(a);
// console.log(b);

// const dolar = "1000";
// const dolarInt = parseInt(dolar);
// console.log(typeof dolarInt);
// console.log(parseFloat);

// //? Cok kosullu
// const grade = prompt("Please enter your grade:");

// let result = null;
 // let result = ""
// if (grade < 0) {
//   console.log("Grade can not be smaller than zero");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("Grade can not be bigger than 100");
// }

// if (result != null) {
//   console.log(`Your score:${result}`);
// }
//? Kısa yol
// if (result) {
//   console.log(`Your score:${result}`);
// }

// console.log(typeof yas);

// if (yas > 0 && yas <= 4) {
//   console.log("bebek");
// } else if (yas > 4 && yas <= 15) {
//   console.log("cocuk");
// } else if (yas > 15 && yas <= 39) {
//   console.log("genc");
// } else if (yas > 39 && yas < 150) {
//   console.log("yaslı");
// }
// if (yas >= 150) {
//   console.log("sonuc bulunamadı");
// }

// console.log(`sonuc:${yas}`);

 // console.log("sonuc:", yas);

// ! ternary ile yapalım....
// const yas = Number(prompt("yası giriniz"));

// yas > 0 && yas < 4 ? console.log("bebek") : ;
// yas > 5 && yas < 15 ? console.log("cocuk") : );
// yas > 15 && yas < 40 ? console.log("genc") : console.log("genc değil");
// yas > 40 && yas < 150 ? console.log("yaslı") : console.log("yaslı değil");
// const result =
//   yas < 4
//     ? "bebek"
//     : yas < 15
//     ? "cocuk"
//     : yas < 40
//     ? "genc"
//     : yas < 150
//     ? "yaslı"
//     : "yas bulunamadı";
// console.log(result);

// yas < 4
//   ? console.log("bebek")
//   : yas < 15
//   ? console.log("cocuk")
//   : yas < 40
//   ? console.log("genc")
//   : yas < 150
//   ? console.log("yaslı")
//   : "yas bulunamadı";





// ? 1-Sayının Pozitif veya Negatif olduğunu bulma // if else
//? 2-Sayının tek mi çift mi olduğunu bulma //if else
// ? 3-Haftanın gününü yazdırma(if else)
// ? 4-Ehliyet alabiliyor mu? // koşullar yaşın 18'den büyük olması ve araba sürmeyi bilip bilmemesi
// ? 5-Login = Kullanıcı id ve şifre kontrolü // if else
// ? 6-Login = Kullanıcı id ve şifre kontrolü(iç içe koşullar) // id doğru girerse passwordu istesin
// ? 7-Hesap makinesi yapımı if else
// ? 8-Switch case ile haftanın gününü yazdırma