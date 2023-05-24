// const array = [100,"CW",true];
// console.log(array);

// const dizi =new Array(10)
// console.log(dizi);

// const dizi2 =["ali",2,"true"]
// console.log(dizi2);
// console.log(dizi2.length);
// console.log(dizi2[-1]);
// console.log(dizi2[5]);
// console.log(dizi2[2]);
// const colors = ['Red','Green', 'Blue'];
// console.log(colors[colors.length-1]);
// console.log(colors[0]);
// console.log(colors[-1]);
// console.log(typeof colors);
// console.log(Array.isArray(colors));
// console.log(colors instanceof Array);

// colors[1]= "ali"
// console.log(colors);
// colors[3]="veli"
// console.log(colors);
// colors[5]="deli"
// colors[6]=2
// console.log(colors.length);
// !primitive
// let a =5;
// let b =a;
// console.log(a);
// console.log(b);

// a=6;
// console.log(b);
// const colors = ['Red','Green', 'Blue'];
// // ! non primitive

// let arr =[1,2,"three",false];
// const arr1 = arr;
// console.log(arr);
// console.log(arr1);

// arr1[0]=0

// console.log(arr);
// console.log(arr1);


// console.log(colors.slice(2,6));



// !   çalışma pazar günü

// const menu = ["ali","veli","deli",false,"12",false];
// const menu2 =["a",2];
// console.log(menu);

// const menu1 = new Array("ali","veli",2,false,"12");
// console.log(menu1);
// console.log(menu1.length);

// menu[7]= 4
// console.log(menu);
// console.log(menu.slice(2));
// console.log(menu.slice(2,4));
// !push sona ekleme yapar length i dönderir
// console.log(menu.push("deli","veli"));  
// console.log(menu);
// console.log(menu.push(...menu2));
// console.log(menu.push(...menu2));
// console.log(menu);
// !pop sondakini siler sildiğini dönderir


// console.log(menu.pop());
// console.log(menu2.pop());

// ! unshift baş kısma ekler length i dönderir
// console.log(menu.unshift("deli"));

// console.log(menu.unshift(...menu2));
// console.log(menu);
// !shift ilk elemanı siler sildiğini dönderir
// console.log(menu.shift());
// console.log(menu2.shift());


// ! içindeki eleman sayısı tekse içindeki değerin indeksine gider sona kadar siler ;silineni dönderir;

// console.log(menu.splice(2));
// !içinde yazan inndekse git 2nci paraemtre kadar değeri sil silinen değeri döndür
// console.log(menu.splice(2,2));
// console.log(menu.splice(3,0,"a"));

// ! concat
// console.log(menu.concat(menu2));
// !indexof-lastindexof
// console.log(menu.indexOf(false,-1));
// console.log(menu.lastIndexOf(false));

// ! reverse tersten itibaren sıralar ...
// console.log(menu.reverse());
// console.log(menu2.reverse());

// ! join array i elemanlarına ayırır biz burda arrayleri string e çeviriyoruz
// ! STRİNGE ÇEVİRMEK İÇİN KULLANILIR
// console.log(menu.join());
// console.log(menu.join(""));
// console.log(menu.join(" "));
// console.log(menu.join(":"));
// console.log(typeof menu.join());

// ! sort  
// ! sıralamayı ASCII kod sistemine göre yapar

// console.log(menu.sort());

//  ascending sorting
// menu.sort((a,b) => a-b)
// console.log(arr) // [ 1, 2, 5, 11, 22, 55, 111 ]

//  descending sorting
// arr.sort((a,b) => b-a) //numeritik olarak sıralar
// console.log(arr) // [ 111, 55, 22, 11, 5,  2,  1 ]
// console.log(menu);




// ! includes 
// ! içinde olup olmadığını sorgular varsa true yoksa false dönderir
// console.log(menu.includes(false,2));
// ? dizideki sayılaarı sırasıyla veren uygulama
// let dizi = [5, 2, 2, 4, 1];
// console.log(dizi.sort());
// ? dizideki sayılaarı tersten veren uygulama

// console.log(dizi.reverse());
// ? dizideki sayılaarı sırasıyla yazan uygulama

// for(let i=0; i<dizi.length; i++ ){
//     console.log(dizi[i])
// }
// ? dizideki sayılaarı çift mi tek mi  veren uygulama

// for(let i = dizi.length; i>0; i--){
//     if(dizi[i-1]%2==0){
//        console.log("çiftir"); 
//     }else console.log("tektir");
// }

// ! asıl çözüm
// let dizi = [12, -4, -2, -11, -6];
// let max = dizi[0] 
// for(let i =0; i < dizi.length; i++){
//   if(max < dizi[i]){
//     max=dizi[i] 
// }
// }
// console.log(max);

// ! kısa yol dizideki sayıların en büyüğünü bulan uygulama
// let dizi = [5, 10, 2, 4 ,1]
// console.log(Math.max(...dizi));

// 9- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 45

// let dizi = [2, 0, 2, 11, 6];
// let sum =0
// for(let i=0; i<dizi.length; i++){
//     sum += dizi[i]
// }
// console.log(sum);

//* ============= SORU ============
//? Öğrendiğimiz metotlarla red ve orange'ın yerini değiştirin

// const color = [ 'red', 'blue', 'purple', "white", "orange"];


