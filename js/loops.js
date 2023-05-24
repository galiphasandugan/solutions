// TODO JS 3. DERS - SLAYT SONUNDAKİ ÖDEVLER

//? ÖRNEK 1 - SLAYT 4
// ? 1'den n kadar olan sayıların toplamını yazdıran bir program

// let sum =0
// let n = +prompt("please enter your code");
// for(let i =1 ; i <=n ; i++){
//     sum += i;
// }
// console.log(sum);


// ? ÖRNEK 2 - SLAYT 5
// ? 0-100 arasında 10 adet sayı üreten kodu for döngüsü ile yazınız.


// for(let i =0 ; i<10; i++){
//    let num= Math.round(Math.random()*100) 
//    console.log(num);
// }

//? ÖRNEK 3 - SLAYT 6
// ? Dışarıdan girilen sayının Asal olup olmadığını tespit ederk sonucu tazdıran programı for döngüleri ile yazınız.

// let n = +prompt("please enter your code");
// let result = true

// for (let i =2; i < n; i++){
//     if(n%i == 0){
//         result = false
//         break
//     }
// }
//  const x = n==1 ? "asal değil" : result ? "asal sayı" :"asal sayı değildir"
//  console.log(x);


//? ÖRNEK 4 - SLAYT 8
// ? 10 kere konsola Merhaba yazdıran uygulamayı while döngüsü ile yazınız.
// let i = 0
// while(i < 10){
//     console.log("merhaba");
//     i++
// }
// for(let i =0; i<10; ++i){
//     console.log("merhaba");
// }


// let i = 0
// do{
//    console.log("merhaba");
//     i++
// }while(i < 10)



//? ÖRNEK 5 - SLAYT 9
// ? Kullanıcıdan 0-100 arasında bir not isteyen ve girilen not 0-100'den farklı ise kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayan kodu While döngüsü ile yazınız.

// let num = prompt("sayı giriniz")
// let i = 0
//  while(i < 1){
//     if(num< 0 || num>100){
//     console.log("0-100 arasında bir sayıı giriniz");
//     let num = prompt("sayı giriniz")
//     }
//     else {
//          console.log(num);}
//     i++
//  }

// let num = prompt("sayı giriniz")

//  while(num< 0 || num>100){
//     console.log("0-100 arasında bir sayıı giriniz");
//     num = prompt("sayı giriniz")
//     }
// console.log(num);
 






//? ÖRNEK 6 - SLAYT 11
// ? Kullanıcıdan 0-100 arasında bir not isteyen ve girilen not 0-100'den farklı ise kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayan kodu Do While döngüsü ile yazınız.
// let num = prompt("sayı giriniz")

// do{
//     console.log("0-100 arasında bir sayıı giriniz");
//     num = prompt("sayı giriniz")

// }while(num< 0 || num>100)
// console.log(num);

//? ÖRNEK 7 - SLAYT 12
// ? Klavyeden Q vey q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde 0 ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

// let counter = 0
// let average = 0
// let total =0 
// let not;

// do{
//     not  = prompt("sayı girinzi")
//     if(not == "q" || not== "Q"){
//     }else{
//         total +=Number(not)
//         counter++
//     }
// }while(!(not == "q" || not == "Q"))
// average = total / counter
// console.log(average);

// ? cümledeki tüm kelimelerin baş harfini  büyük yapan programı yazınız

// let str1 = " Hello, how ist it going?"
// let str2 = str1.trim().split(' ')
// console.log(str2)
// let str3 = ''
// for(i =0; i<str2.length;i++){
//     str3 += str2[i][0].toLocaleUpperCase()+ str2[i].slice(1)+' '
// }
// console.log(str3) (edited) 


// ! alternatif çözüm ama eksik var

// let str1 = " Hello, how ist it going?"
// let str2 = str1.trim().split(' ')
// console.log(str2)
// let str3 = ''
// for(i =0; i<str2.length;i++){
//     str3 += str2[i][0].toLocaleUpperCase()+ str2[i].slice(1)+' '
// }
// console.log(str3) 

// ? FİBONACCCİ SORUSU
// do {
//   let ilkSayi = 0;
//   let ikinciSayi = 1;
//   let fibonacci = 0;
//   let sayi = prompt("Lutfen bir pozitif sayi giriniz:");
//   if (sayi <= 0) {
//     alert("Girdiginiz sayi sifirdan buyuk olmali.");
//   } else {
//     for (let i = 0; i < sayi; i++) {
//       ilkSayi = ikinciSayi;
//       ikinciSayi = fibonacci;
//       fibonacci = ilkSayi + ikinciSayi;
//     }
//     console.log(fibonacci);
//   }
//   var kontrol = prompt("Devam etmek istiyor musunuz? (E  H)");
// } while (kontrol == "E" || kontrol == "e");

// let ilkSayi = 1;
// let ikinciSayi = 1;
// let fibonacci = 0;
// for (let i = 1; i < 15; i++) {
//   ilkSayi = ikinciSayi;
//   ikinciSayi = fibonacci;
//   fibonacci = ilkSayi + ikinciSayi;
//   console.log(fibonacci);
// }

// console.log("tekrar deneyin");
// ! 1.soru çözümü
// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i);
//   } else {
//   }
// }
// !2.soru çözümü
// const n1 = +prompt("sayı girniz");
// const n2 = +prompt("sayı girniz");
// const n3 = +prompt("sayı girniz");
// const n4 = +prompt("sayı girniz");
// const n5 = +prompt("sayı girniz");

// for (let i = 0; i < 1; i++) {
//   result = n1 + n2 + n3 + n4 + n5;
//   console.log(result / 5);
// }
// ! 2.soru çözümü
// let sayac = 0;
// let toplam = 0;

// while (sayac < 5) {
//   let sayı = +prompt("sayı giriniz");
//   toplam += sayı;
//   sayac++;
// }
// console.log(toplam / 5);
// ! 3.soru çözümü

// let durum = true;
// let sum = 0;
// while (durum) {
//   let sayı = +prompt("sayı giriniz");
//   if (sayı < 0) {
//     durum = false;
//     console.log(sayı);
//   } else {
//     sum += sayı;
//     console.log(sum);
//   }
// }
// !4 .soru çözümü

// for (let i = 1; i < 101; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizz buzz ");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else if (i % 5 == 0) {
//     console.log("buzz");
//   } else console.log(i);
// }

// !! sorular
// ? const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i;
// let text;
// let len;
// for (i = 0, len = cars.length, text = ""; i < len; i++) {
//   text += cars[i];
// }
// console.log(text);


// ?  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i) {
//   text = cars[i];
//   console.log(text);
// }
// let text = "";
// for (let i = 0; i < 5; i++) {
//   text = "The number is " + i;
//   console.log(text);
// }
// the number is 0
// the number is 0 the number is 1
// the number is 0 the number is 1 the number is 2


// let i = 0;
// let text = "";
// let i = 0;
// while (i < 10) {
//   text = "The number is " + i;
//   i++;
//   console.log(text);
// }
// let text = "";
// let i = 0;

// do {
//   text = "the number is" + i;
//   i++;
//   console.log(text);
// } while (i < 10);

// let i = 0;
// while (i < 10) {
//   text = "the number is " + i;
//   i++;
//   console.log(text);
// }

// for (let i = 0; i < 10; i++) {
//   text = "the number is" + i;
//   console.log(text);
// }

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     break;
//   }
//   text = "The number is " + i;
//   console.log(text);
// }

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i > 3) {
//     break;
//   } else if (i == 1) {
//     continue;
//   }
//   text = "The number is " + i;
//   console.log(text);
// }
//** 0-100 arasında 10 adet rastgele sayı üreten kodu for döngüsü ile yazınız.

// const number = prompt("How many numbers:?");
// //! Math.random()   => 0-1 arasında bir sayı üretir.

// for (let sayac = 1; sayac <= number; sayac++) {
//   const rastgeleSayı = Math.round(Math.random() * 100);
//   console.log(rastgeleSayı);
//   console.log(`${sayac}. sayınız :${rastgeleSayı}`);
// }
// let i = 0;
// while (i < 10) {
//   console.log("merhaba");
//   i++;
// }
// console.log("BYE");
// let number = prompt("num giriniz");

// while (number < 0 || number > 100) {
//   console.log("not 0 dan  küçük veya 100 den b üyük olamaz");
//   const number = prompt("num giriniz");
// }
// console.log("notunuz", number);

// do{
//   let number = prompt("num giriniz");
// }
// console.log("hello")

// * short-circuit 

// const n1 = +prompt("please enter your number");
// const n2 = +prompt("please enter your number");
// const n3 = +prompt("please enter your number");
// !tek durumlu koşullandırmada kullnaılmak zorundadır
// grade >= 50 ? console.log("succeed") : console.log("");

// const result = grade  >= 50 && "aferin";
// console.log(result);
// * girilen sayının çift mi tek mi olduğuu sorgulayan code?
// const result = sayı%2 == 0 ? "Çift sayıdır" : "tek sayıdır"
// console.log(result);

// if(n1> n2 && n1 > n3){
//     console.log("biggest number is " ,n1);
// }else if(n3> n2 && n3 > n2){
//     console.log("biggest number is " ,n3);
// }else if(n2> n1 && n2 > n3){
//     console.log("biggest number is " ,n2);
// }
// if(n1< n2 && n1 < n3){
//     console.log("en kucuk number is " ,n1);
// }else if(n3<n2 && n3 < n2){
//     console.log("en kücük number is " ,n3);
// }else if(n2 <n1 && n2 < n3){
//     console.log("en kücuk number is " ,n2);
// }
// ! en büyük sayı sorusu
// let biggest = n1;
// if(n2 >= biggest){
//     biggest= n2
// }
// if(n3 >= biggest){
//     result= n3
// }
// console.log(`${biggest} is biggest`);

// const not = +prompt("please enter your number");

// if(not > 91 && not <=100){
//     result ="AA"
// }else if(not> 76 && not <=91){
//     result = "BA"
// }else if(not> 65 && not <=76){
//     result = "BB"
// }else if(not> 46 && not <=65){
//     result = "CC"
// }else if(not> 26 && not <=46){
//     result = "DD"
// }else if(not>= 0 && not <=26){
//     result = "FF"
// }

// console.log(result);
///! fahrenheit sorusu
// const degree = +prompt("please enter your degree");
// const fahr = +prompt("please enter your fahrenheit");


// if(degree){
//     result= degree * 33.8
// }else if(fahr){
//     result = fahr/33.8 
// }
// console.log(Math.round(result));

// const n = prompt("enter a number btw grather than 3 ");
// for (let i = 2; i < n; i++){
//     if (n % i == 0) {
//         i = n;
//         console.log(`${n} is not a prime`);
//         break;
//     } else if ( i == n -1) {
//         console.log(`${n} is a prime number`);
//     }
// }


// ? 9-1'den n'ye kadar olan sayıların toplamını hesaplama
// ? 10-3'e tam bölünenlere fizz, 5'e tam bölünenlere buzz yazdırma 15'e bölünene fizzbuzz
// ? 11-1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma
// ? 12-benzin istasyonu uygulaması
// ? 13-atm uygulaması
// ? 14-Beden kitle endeksini hesaplama
// ? 15-Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while)
// ? 16-Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)
// ? 17-Fibonacci Dizisi oluşturma
