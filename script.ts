// const myArray:number[] = [1,2,3,4,5];


// const totalSumWithMathpow = (myArray: number[]):number => {
//     let arrayOfPow:number[] = myArray.map((number: number) => Math.pow(number,2));
//     let totalSum:number = arrayOfPow.reduce((prev,next) => prev + next, 0)
//     return totalSum;
// }

// console.log(totalSumWithMathpow(myArray))
// console.log(myArray);


let firstUpperTooth = document.querySelector(".toothUpOne")
let secUpperTooth = document.querySelector(".toothUpTwo")
let thirdUpperTooth = document.querySelector(".toothUpThree")
let fourUpperTooth = document.querySelector(".toothUpFour")
let fiveUpperTooth = document.querySelector(".toothUpFive")
let topTeeths = [firstUpperTooth, secUpperTooth, thirdUpperTooth, fourUpperTooth,fiveUpperTooth]
console.log(topTeeths)

let firstBottomTooth = document.querySelector(".toothDownOne")  
let secondBottomTooth = document.querySelector(".toothDownTwo")  
let thirdBottomTooth = document.querySelector(".toothDownThree")  
let fourBottomTooth = document.querySelector(".toothDownFour")  
let fiveBottomTooth = document.querySelector(".toothDownFive")  

let bottomTeeths = [firstBottomTooth, secondBottomTooth, thirdBottomTooth, fourBottomTooth,fiveBottomTooth]
console.log(bottomTeeths)

// behöver ett ID som är death? alltså att tanden går ner, och detta ID 
//ska random ges till någon av de tänderna som är uppe, detta id aktiveras 
// när tanden under har tryckts på
// de andra tänderna där uppe ska bara stanna kvar, medans bottom teeths ska sjunka lite. 



