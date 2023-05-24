
// const letters = ['A', 'B', 'C', ,'E'];
// letters.forEach((letter) => {
//   console.log(letter);
// });

// const letters = ['A', 'B', 'C', ,'E'];
// letters.forEach((a)=>{
//     console.log(a);
// });


// const letters = ['A', 'B', 'C', ,'E'];
// for (let i = 0; i < letters.length; i++) {
//   console.log(letters[i])
// }
// function name1(element) {
//     console.log(element);
// }
// const prices = [900, 1200, 650, , 2000, 500, 1700];
// prices.forEach(name1);



// function renkler(renk,i){ 
//     if(i%2==0){
//         console.log(renk);
//     }else
//     console.log(i);
// }


// const color =["mavi","yeşil","sarı","kırmızı","mor"];
// color.forEach(renkler)

// const sides = [2, 4, 5, 8, 10];
// sides.map((a)=> {
//     return console.log(a**2);
// });


// const sides = [2, 4, 5, 8, 10];
// const resul =sides.map((a)=> {
//     return a**2;
// });
// console.log(resul);

// const sides = [2, 4, 5, 8, 10];
// sides.map((first) =>{
//     return console.log(first*2);
// });
// sides.forEach(topla).map(a).filter(dgg)


// let numbers = [1, 2, 3, 4,"ali", 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter( (number,ind)=> {
//   return number%2==0
// });

// console.log(evenNumbers); 


// const text =["ali","veli","deli",,2,"alev","bulut","sema"];


// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(function (a, b) {
//   return a*b
// }, 0);

// console.log(sum); 
 
//? grades'in ortalamasini hesaplayiniz.
// const grades = [55, 77, 23, 89, 100, 44, 33]
// const a =[]
// const b =[]
// let sum =0
// for(let i =0; i< grades.length; i++){
//   sum +=grades[i]
  
// }
// console.log(Math.floor(sum/(grades.length)));

// for(let i in grades){
//     grades[i] < 50
//     ? a.push(grades[i])
//     : b.push(grades[i])
// }
// console.log(a);
// console.log(b);
// console.log(grades);
// let result =0
// for(let i of grades){
//     result += i
//     console.log(object);
// }
//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------v
// const students=[ "ahmet","mehmet","ismet","saffet","ahmet","saffet"];
// const findStudents = (name) =>{
//     let counter =0
//     for(let student of students){
//         // if(student==name){
//         //     counter++
//         // }
//         student === name && counter++

//     }
//     return counter === 0
//     ? `${name} can not br found`
//     : `${name} found ${counter} times`
// }
// console.log(findStudents("ahmet"));


//  const result =prices.forEach((a)=>{
//     return a;
//  })
//  console.log(result); 


// const prices =[250,150,300,500] 
// let sum = 0
// const result = prices.forEach((price) => {
//     sum += price
//     return sum;;
// })
// console.log(result);

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]
// const result= names.map((name1=>{ name1.toLocaleUpperCase()
//     return name1;
// }))
// console.log(result);
// console.log(names);

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
// let result =[]
// const biggerThan = salaries.filter((a)=>{
//    return a >= 7000

// })
// console.log(biggerThan);



// for(let i=0; i<grades.length; i++){
//     console.log(grades[i]);
// }

//  let list =[]
// for(let i=0; i<grades.length; i++){
//     if(grades[i]>50){
//       list.push(grades[i])  
//     }
// }
// console.log(list);

// let buyukList =[]
// let kucukList=[]
// ! for(let i in grades){
  //     grades[i] > 50 
//     ? buyukList.push(grades[i])
//     : kucukList.push(grades[i])
// }
// console.log(buyukList);
    // console.log(kucukList);
    // const grades = [55, 77, 23, 89, 100, 44, 33, 45];
    // for(let x of grades){
        //       x>50 && console.log(x)
        //      x == "ahmet" && console.log(x)
        //      x== "ahmet" ? console.log(x) : "" 
        //      x > 50 ? console.log(x) : "" ([] boş array de olur)
        // }
        
        
        // const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];

        // students.forEach((x,y)=>{
        //     console.log(x);
           
        // })
        // let sum = 0
        // prices.forEach((price) => (sum += price))
        // console.log("SUM:", sum)
        
        // console.log("*********")
        //! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
        // console.log(prices.forEach((price) => price * 2))
        
        //* Foreach ile dongu icerisinde herhangi bir item okunabilir, listelenbilir veya yazdirilabilir. Ancak bu degeri dondurmek mümkün değildir.
        // prices.forEach((price) => console.log(price * 2))

        // let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]
        
        // const buyukHarf = names.map((isim) =>isim.toLocaleUpperCase())
        // console.log(buyukHarf);


        
        // const kare = grades.map((num) =>{
        // return num*2}).forEach((num)=> console.log(`num:${num}`))
        
        // const kare = grades.map((num)=>{
        //     return num> 50 ? num*2 : num
        // }).forEach((num)=>console.log(num));
       

        // const grades = [55, 77, 23, 89, 100, 44, 33, 45];

        // const bigNumber = grades
        // .filter((num)=>{return num>50 && num })
        // .map((num)=>{return num*2})
        // .forEach((num)=>console.log(num))
        
        // const grades = [55, 77, 23, 89, 100, 44, 33, 45];
        // const result = grades.filter((num,ind)=>{
            
        //    let enBuyuk = grades[0]
        //    return num > enBuyuk && num[(grades.length)-1]
             
        //  })
        // console.log(result);


        // let arr1 = [1, 2, 3, 4, 5];
        // let arr2 = [4, 5, 6, 7, 8];       
   
// const result= arr1.filter((num,i)=>{
//     if(arr1.includes(arr2[i])){
//      console.log(arr2[i]);

//     }
// }) 
        
        
// İşlev: Bir dizideki kelime uzunluğu 5'ten büyük olan kelimeleri filtrelerip yazdırın

// const words = ['apple', 'banana', 'grapefruit', 'kiwi', 'orange'];

// const result = words.filter((vowel)=>{
//     return vowel.length > 5 && vowel
// })
// console.log(result);

// İşlev: Bir dizideki sayıları tersine çevirerek yeni bir dizi oluştururunuz yani her sayıyı tersten yazdırmamız isteniyor

// const numbers = [123, 456, 789];
// const reverseNumber =numbers.reverse()
// const result = reverseNumber.map((num) =>{
//     const a = num.toString().split("").reverse().join("")
//       return a;
// })
// console.log(result);


// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?
// const grades = [55, 77, 23, 89, 100, 44, 33, 45];
// let sum=0
// grades.forEach(function(num){
//   sum+= num
// })
// console.log(sum/grades.length);



// let sum=0
// function hesapla(){
//   for(let i =0; i>grades.length; i++){
//     sum+= grades[i]
//     console.log(sum);
//   }
//   return console.log(sum);
// }

// hesapla()



// soru 2: Bir prağraftaki sesliharflerin sayısını bulan fonksiyonu yazınız?

// let text = ["merhabalar selman hocam"];
// let sesliHarfler = "aeıou";
// let newText= text.toString(" ");
// let sum ="";

// text.forEach((a,b)=>{
// for(let i =0; i< newText.length; i++){
//       if(sesliHarfler.includes(newText[i])){
//         sum+=newText[i]
//       }
//     }
// console.log(sum.split(""));
// });


// soru 3: Bir dizideki en büyük sayıyı bulan fonksiyonu yazınız?
const grades = [55, 77, 23, 89, 100, 102, 33, 45];

let enBuyuk = grades[3];

for(let i =0; i< grades.length; i++){
  if(grades[i] > enBuyuk){
    enBuyuk= grades[i]
  }
}
console.log(enBuyuk);




// soru 4: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.
// soru 5: Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.
// soru 6: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.
// soru 7: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.


