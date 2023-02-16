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


let firstBottomTooth = document.querySelector(".toothDownOne")  
let secondBottomTooth = document.querySelector(".toothDownTwo")  
let thirdBottomTooth = document.querySelector(".toothDownThree")  
let fourBottomTooth = document.querySelector(".toothDownFour")  
let fiveBottomTooth = document.querySelector(".toothDownFive")  

let bottomTeeths = [firstBottomTooth, secondBottomTooth, thirdBottomTooth, fourBottomTooth,fiveBottomTooth]

let arrayOfStrings:string[] = ["Are you sure?", "You'll regret your actions!", "DON'T!!", "Soon you'll be Tomato paste", "What if... you die?", "This one is safe", "Don't worry my friend", "Time is ticking.." ]
let randomNr:number = Math.floor(Math.random()*5); 


(() => {
    const deadlyTooth = bottomTeeths.filter((tooth, index) => index === randomNr);
    const firstTooth = deadlyTooth?.[0] ?? null; // Destructure the first element from the array
    const upperTeethDeadly = topTeeths.filter((tooth,index) => index===randomNr) 
    const UpperTeeth = upperTeethDeadly?.[0] ?? null


    if (firstTooth) {
        firstTooth.id = "deadly"; 
    }

    bottomTeeths.forEach(tooth => {
        tooth?.addEventListener("click", () => {
            console.log(tooth);
            if (tooth.id === "deadly" && UpperTeeth !== null) {
                UpperTeeth.id = "down";
                console.log(UpperTeeth)
            } else {
                console.log("Bad");
            }
        });
    })
    
})();






// behöver ett ID som är beforedeath alltså sen death ontrigger? alltså att tanden går ner, och detta ID 
//ska random ges till någon av de tänderna som är uppe, detta id aktiveras 
// när tanden under har tryckts på
// de andra tänderna där uppe ska bara stanna kvar, medans bottom teeths ska sjunka lite. 


//vill vi ha en counter av hur många gånger man har lyckats klara sig från bettet?
// kanske lite text som gör en osäker på sina val, timer?

