//! LESSON NOTES
// let str = "hello";
// let str2 = "world";
// let length = str.length;


// console.log(length);
// console.log(str.charAt(-));
// console.log(str.concat(str2).charAt(8));
// console.log(str.concat(str2).charAt(8).length);

// console.log(str2.includes("w"));
// console.log(str.includes("W"));

// console.log(str2.indexOf("w"));
// console.log(str2.lastIndexOf("r"));

// console.log(str2.search("l"));

// console.log(str.replace("ali","he"));
// console.log(str.replace("ali","he"));

// let str = "This is a string"
// let str1 = "This is a string"
// let str2 = "This is a string"
// let str4 = new String("This is a string") 

// console.log(str);
// console.log(str4);
// console.log(str.length);
// console.log(str[0]);
// console.log(str[0]);


// const str ="Hello World"
// console.log(str.length);
// console.log(str[6]);

// for(let i =str.length-1;  i>=0; i--){
//     console.log(str[i]);
// }

// let str = `I \'m \'a strinhg `
// let str1= `I \'m \'a st \trinhg `
// console.log(str1);


// let str = "helllo how are you brother"

// let str2 = str.slice(4,6)
// console.log(str.slice(4));
// console.log(str.slice(4,6));
// console.log(str.slice(4,-2));
// console.log(str2);
// console.log(str.substring(0,4));
// console.log(str.substring(4,0));
// console.log(str.substring(4,0));
// console.log(str.substring(2)); 
// //! hata verirr içerisi eksi değer almaz



// let great = "hello";
// console.log(object);
// let str1 = "clarusway";
// console.log(str1.includes("l"));
// console.log(str1.includes("l",2));
// console.log(str1.indexOf("a"));
// console.log(str1.indexOf("a",3));
// console.log(str1.indexOf("l",3));







// ? let email = prompt("email adresini giriniz")
// console.log(email.includes("@"));
// console.log(str.includes("@"));



// ? 12.soru
// Input : 'Clarusway' => Output :  **'Clarusway'**

// Input : 'days. big make things Little' => Output :  **'Little things make big days.'**

// let word = prompt("enter our word");
// let wordNumber = word.split(" ").length
// let result =""
// function sonuc(word){
//     if( wordNumber ==1){
//     result = word
//     }else {
//         for(let i= wordNumber; i>0; i--){
//           result += word.split(" ")[i-1] + " "
//         }
//     }
//     return result
//  }
// console.log(sonuc(word));


// ? 13.soru
// - reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

// - reverse("Happy") ➞ yppaH

// let word =prompt("please enter word");
// let sonuc =word.length
// let result =""
// console.log(sonuc);
// for(let i =sonuc; i>0; i--){
//     result += word[i-1]
// }
// console.log(result);


// let result =word.length;
// console.log(result);


// console.log(wordNumber.length);

// console.log(sentences.toUpperCase());
// console.log(sentences.toLowerCase());
// console.log(sentences.trim());

// const result=sentences.replace("a","A")
// console.log(result);
// console.log(sentences.indexOf("ali"));

// console.log(sentences.charAt(1));
// console.log(sentences.includes("a"));


// let sen = "ali"
// let sen1 ="alivelideli"

// console.log(sen+ "a" + " ");
// console.log(sen.concat(" 15 yaşında"));

// console.log(sen1.slice(-2));

// ! questions
// ? Input : 'Clarusway' => Output :  **'Clarusway'**
// ? Input : 'days. big make things Little' => Output :  **'Little things make big days.'**

// let text = prompt("text giriniz");
// let text = "days. big make things Little"
// let result = text.split(" ")
// let sonuc =""
// for(let i=result.length; i>0; i--){
//       sonuc += result[i-1] + " "
// }
// console.log(sonuc);

// ? - reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
//? - reverse("Happy") ➞ yppaH

// let text = prompt("text giriniz");
// let result = text.split("")
// let sonuc =""
// for(let i=result.length; i>0; i--){
//       sonuc += result[i-1]
// }
// console.log(sonuc);


//?-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// console.log(findWordCount('hello world')) // output: 2

// let word =prompt("cümle giriniz")
// let result =""
// for(let i= word.length; i>0; i--){
//      result += word.split("")[i-1]
// }
// console.log(result);