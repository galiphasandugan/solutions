
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

// ! reduce

// ! acumulative
// ! çıkışı sadece sayıdı ama return özelliği vardır

// const maas = [5500,8000,6500,9000,10000,15000,25000]

// const totalMaas = maas.reduce((toplam,değer)=>toplam + değer, 0)
// console.log(totalMaas);






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
// const grades = [55, 77, 23, 89, 100, 102, 33, 45];

// let enBuyuk = grades[3];

// for(let i =0; i< grades.length; i++){
//   if(grades[i] > enBuyuk){
//     enBuyuk= grades[i]
//   }
// }
// console.log(enBuyuk);




// soru 4: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.





// soru 5: Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.
// soru 6: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.
// soru 7: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.


// Nesneler


const carData = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver',
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6
    }
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    color: 'White',
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4
    }
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2018,
    color: 'Red',
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 4,
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    color: 'Black',
    mileage: 10000,
     engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4
    }
  },
  {
    id: 5,
    make: 'Dodge',
    model: 'Challenger',
    year: 2016,
    color: 'Blue',
    mileage: 5000,
     engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6
    }
  },
  {
    id: 6,
    make: 'BMW',
    model: '3 Series',
    year: 2015,
    color: 'Silver',
    mileage: 35000,
     engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 7,
    make: 'Audi',
    model: 'A4',
    year: 2014,
    color: 'Black',
    mileage: 30000,
     engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4
    }
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2013,
    color: 'White',
    mileage: 25000,
     engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6
    }
  },
  {
    id: 9,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2012,
    color: 'Red',
    mileage: 20000,
     engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4
    }
  },
  {
    id: 10,
    make: 'Tesla',
    model: 'Model S',
    year: 2011,
    color: 'Silver',
    mileage: 15000,
     engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4
    }
  },
]


// 1- Rengi gümüş olan arabaları bir listeye ata.

// let result =carData.filter((a)=>a.color =="Silver");
// console.log(result);

// 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.
// let result =carData.filter((a)=>a.year > "2015");
// console.log(result);

// 3- Arabaların ortalama kilometre değerini hesapla.

// let result =carData.reduce((top,a)=> top + a.mileage ,0);
// console.log(result/carData.length);

// 4- 8 silindirli araçları listele



//! 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.




// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}







// 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
// Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.

// 7-  Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
// Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
// örnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// let results = {"Java": 10, "Ruby": 80, "Python": 95}

// 8-  Soru: Bir restoranın menüsündeki yemekleri temsil eden bir nesne dizisi olduğunu düşünelim. Her yemek nesnesi, yemek adı ve fiyatı gibi özelliklere sahiptir. Bu nesne dizisini kullanarak menüdeki her yemeğin adını ve fiyatını ekrana yazdıran bir JavaScript kodu nasıl yazılır?

// 9-  Bir alışveriş sepetindeki ürünlerin listesini içeren bir dizi verilmiştir. Her bir ürün bir nesne olarak temsil edilmektedir ve her bir ürünün adı, fiyatı ve stok durumu bilgilerini içermektedir. Aşağıdaki gibi bir dizi verilmiştir:
// let sepet = [
//   { ad: 'Kalem', fiyat: 5, stok: 10 },
//   { ad: 'Defter', fiyat: 10, stok: 5 },
//   { ad: 'Silgi', fiyat: 2, stok: 3 },
//   { ad: 'Kalemtraş', fiyat: 3, stok: 2 }
// ];
// Bu sepetin içindeki ürünlerin fiyatlarının toplamını bulmak için hangi array methodlarını kullanırsınız?

// 10  Her kitap bir nesne olarak temsil edilmekte ve kitap adı, yazarı ve yayın tarihi gibi özelliklere sahip. Bu kitap koleksiyonunu kullanarak yayın tarihi 1950'dan önce olan kitapların listesini eski tarihten başlayarak sıralayıp ekrana yazdırın?

let a = [2, 4, 2, 2, 2, 2, 5, 5, 5, 3, 5, 1, 3, 4, 1, 5, 2, 3, 4, 5, 2, 1, 3, 4, 2, 5]
let bas = a[1]
let counter = 0
for(let i =0; i<a.length; i++){
  if(bas==a[i]){
    bas=a[i]
    counter++
  }
}
console.log(counter);