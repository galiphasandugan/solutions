

// const calculateAge = (year) => new Date().getFullYear() -year

// const r = +prompt("yarıcapı giriniz")
// const h = +prompt("yuksekliği giriniz")
// const sHacmi =(r,h)=> Math.PI * r**2 * h 

// console.log(Math.round(sHacmi(r,3)));
// console.log("volume", sHacmi(r,h).toFixed(2));
// console.log("volume", sHacmi(r,h).toPrecision(4));
// console.log("volume", sHacmi(r,h).toExponential(4));

//**toprecision toplam satır sayısını belirtir  */
// ! expoonentinal  virgülden sonraki miktarı verir



// const add = (n1,n2) => n1 + n2
// const extract = (n1,n2) => n1 - n2
// const multipy = (n1,n2) => n1 * n2
// const divide = (n1,n2) => n1 / n2

// const hesapMakinesi = (n1,n2,operator) =>{
//     let result = 0
//    switch (operator) {
//     case  "+":
//         result = add(n1,n2)
//         break;
//     case "-":
//         result = extract(n1,n2)
//         break;
//     case "*":
//         result = multipy(n1,n2)
//         break;
//     case "/":
//         result = divide(n1,n2)
//         break;
   
//     default:
//         break;
//    }
//    return result ;
// }

// const n1 = +prompt("enter your number")
// const n2 = +prompt("enter your number")
// const operator = prompt("enter your operator")


// console.log(hesapMakinesi(n1,n2,operator));

// const fakto = (n) =>{
//     let result =1
//   for(let i= n; i>1; i--){
//       result *= i
//   }
//   return result
// }

// const number = +prompt("n")


// console.log(`fakto (${number})=${fakto(number)}`);

// ! SCOPE KAVRAMI


// const myYear = (year) => 2023- year

// console.log(myYear(1990));

// const result = new Date().get()
// console.log(result);


// ! function declare

// function toplama(n1,n2){
//     toplam = n1 + n2
//     return toplam
// }

// console.log(toplama(1,2));


// function merhaba(){
//     return "merhaba";
// }

// console.log(merhaba());


// function yasYazdır(yas,date){
//     // console.log("dogum tarihim",date);
//     console.log(`${yas} ${2023-date}yasında`);
// }


// yasYazdır("galip",1990)

// ! ezpression

// const tekÇift = function(n){
//     return n%2 ==0 ? "çiftsayı" :"teksayı"
// }
// let n = prompt("sayı giriniz")
// console.log(tekÇift(n));

// ! arrow function
// ! eğer parametre sayısı 1 ise parentez kullanılmaz
// const topla = (a,b) => 2*a + b
// console.log(topla(1,2)); 



// let piSayısı = 3.14
// const daireAlanı = r => piSayısı * r**2
// const r = prompt("yarıcap giriniz")
// console.log(daireAlanı(r));

// const ucgenAlanı = function(taban, yukseklik){
//     return (taban* yukseklik)/2
// }
// console.log(ucgenAlanı(4,5));

// function ucgenAlanı(taban,yukseklik){
//     console.log((taban*yukseklik/2));
// }
// ucgenAlanı(4,6)


// function ucgenAlanı(taban,yukseklik){
//     return taban*yukseklik/2
// }
// console.log(ucgenAlanı(4,5));

// ! QUESTİONS

// 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

// console.log(calFahrenheit(30)) // output: 86
// const celcius = 30;
// function degree(celc){
//    return (celc *9)/5 + 32
// }
// console.log(degree(30));

// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

// console.log(reverseString('hello world')) // output: dlrow olleh
// let result=""
// let list;

// function reverseWord (text){
//   for(let i=text.length-1 ; i>=0 ; i--){
//      list =text.split("")
//      result += list[i]
//   }
//         return result
// } 
// let text = prompt("text giriniz")
// console.log(reverseWord(text));


// 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız
// let result=""
// let list;

// function reverseWord (text){
//   for(let i=text.length-1 ; i>=0 ; i--){
//      list =text.split("")
//      result += list[i]
//   }
//         return result
// } 
// let text = prompt("text giriniz")
// console.log(reverseWord(text));
// result :olleh text:hello

// text==result ? console.log("palindromkelime"):console.log("false");,


// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?(includes)
// console.log(findVowels('hello world')) // output: eoo
// let word =prompt("kelime yazınız")
// let sesliHarf = "aeıou"
// let result =""

// for(let i= sesliHarf.length;i>0 ; i--){
//     if(word.includes(sesliHarf.split("")[i-1]))
//      result += sesliHarf[i-1]
// }
// console.log(result);




// 5- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28

// let num = prompt("sayı giriniz")
// let sum = 0
// const sumToplam = (num) =>{
//     for(let i =1 ; i<= num; i++){
//        if(num%i==0){
//          sum += i       
//        }
//     }
//     return sum
// }
// console.log(sumToplam(num));


// 6- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true

// ? asal sayı sorusu
// let sayı = prompt("SAYI GİRİNİZ");
// let result;

// const asalSayı = function(sayı){
//     for(let i=2 ; i < sayı; i++){
//        if(!(sayı%i==0)){
//         result= "asal"
//        }
//     }
//     return result
// }
// console.log(asalSayı(sayı));


// ! hesap makinesi sorusu
// const x = +prompt("sayı giriniz");
// const y = prompt("operotor girniz");
// const z = +prompt("sayı giriniz");

// function hesapMakinesi(x, y, z) {
//   if (y == "+") {
//     console.log(x + z);
//   } else if (y == "-") {
//     console.log(x - z);
//   } else if (y == "*") {
//     console.log(x * z);
//   } else if (y == "/") {
//     console.log(x / z);
//   }
// }

// hesapMakinesi(x, y, z);
// ! tek çift sorusu 1.çözüm
// function tekÇift(n) {
//   const result = n % 2 ? "tektir" : "çiftir";
//   console.log(result);
// }
// const x = +prompt("sayı giriniz");
// tekÇift(x);
// ! tek çift sorusu 2.çözüm
// function tekÇift(n) {
//   if (n % 2) {
//     console.log("tektir");
//   } else console.log("çiftir");
// }
// const x = +prompt("sayı giriniz");
// tekÇift(x);

// ! DAİRENİN ALANI
// const n = +prompt("yarıacpı griniz");
// const yarıcap = (n) => {
//   const result = 3.14 * n ** 2;
//   console.log(result);
// };
// yarıcap(n);
// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name} is ${age} years old`);
//   return age;
// }
// console.log(new Date());
// calculate("Ahmet", 1990);
// calculate("İsmet", 1990);

// function isEvenOdd(num) {
//   if (num % 2 === 0) {
//     return "EVEN";
//   } else {
//     return "ODD";
//   }
// }
// const num = prompt("please enter a number");
// console.log(`${num} is ${isEvenOdd(num)}`);

// function isEvenOdd(num) {
//  return num%2 === 0 ? "EVEN" :"ODD"
// const num = prompt("please enter a number");
// console.log(`${num} is ${isEvenOdd(num)}`);





// 7- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.
// console.log(factorial(5)) // output: 120




// 8- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 9
// const dizi= [-1, -2, -3, -4, -5, -6, -7, -8, -9];

// const mostBigNumber = () =>{
//     let bigNumber = dizi[0];
//     for(let i =0; i< dizi.length; i++)
//     if(bigNumber < dizi[i]){
        
//         bigNumber= dizi[i]
//     }
//     return console.log(bigNumber);
// }
// mostBigNumber()




// 9- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 45
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum=0
// const hesapla = function(){
//     for( let i=0; i<dizi.length; i++){
//         sum += dizi[i]
//     }
//    return console.log(sum);;
// }
// hesapla()



// 11- Girilen bir sayının pozitif çarpanlarını bulan bir fonksiyon yazınız
// console.log(findPositiveDivisors(12)) // output: [1, 2, 3, 4, 6, 12]
// const value = prompt("please enter your number")
// const arr =[]

// const positiveMultiply = function(){
//     for(let i=1; i<= value; i++){
//         value %i ? "" : arr.push(i)
//     }
//     return console.log(arr);;
// }
// positiveMultiply()

// 12-Tahmin oyunu

let number = prompt("please enter your number")
let randomNumber = Math.round(Math.random()*100);
console.log(randomNumber);
let tahminSayısı=5;

const game = (number) => {
    for(let i=0; i<tahminSayısı-1; i++){
        if(number == randomNumber){
            result="KAZANDINIZ"
            console.log(result);
            break;
        }else if(number > randomNumber){
            result="SAYIYI AZALT"
            console.log(result);
            number = prompt("please enter your number")
        }else if(number < randomNumber){
            result="SAYIYI ARTIR"
            console.log(result);
            number = prompt("please enter your number")
        }
    }
    if(result != "KAZANDINIZ"){
        console.log("GAMEOVER");
    }
    return result;
}
game(number)
