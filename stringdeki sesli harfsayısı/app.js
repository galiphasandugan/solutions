
// //!  çağırma işlemi
// const btn = document.querySelector("button")
// const input = document.querySelector("input")
// const div = document.querySelector("div")

// const par = document.createElement("p") 

// btn.addEventListener("click", ()=>{

// const text = input.value
// div.appendChild(par)

// let vowel = "aeuoi"
// let result = ""

// for(let i =0; i<text.length; i++){

//     if(vowel.includes(text[i].toLowerCase())){
//      result += text[i]
//      par.innerHTML= "There are"+ " "+ result.length + " " + "vowels Clarusway is the Best"   
//     }
//     else{
//         par.innerHTML= "There are 0 vowels Clarusway is the Best"   
//     }
// }

// })

const btn=document.querySelector("#btn")
const input=document.querySelector("#input")
const result= document.querySelector("#result")

btn.addEventListener('click',countVowel)

function countVowel(){
    const resultValue= input.value
    console.log(resultValue);
    const count= resultValue.match(/[aeiou]/gi);
    result.innerHTML=`${count.length}`   
}

   