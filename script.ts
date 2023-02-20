// const myArray:number[] = [1,2,3,4,5];


// const totalSumWithMathpow = (myArray: number[]):number => {
//     let arrayOfPow:number[] = myArray.map((number: number) => Math.pow(number,2));
//     let totalSum:number = arrayOfPow.reduce((prev,next) => prev + next, 0)
//     return totalSum;
// }

// console.log(totalSumWithMathpow(myArray))
// console.log(myArray);


/********CODE THOUGHTS*******/
// behöver ett ID som är beforedeath alltså sen death ontrigger? alltså att tanden går ner, och detta ID
//ska random ges till någon av de tänderna som är uppe, detta id aktiveras
// när tanden under har tryckts på
// de andra tänderna där uppe ska bara stanna kvar, medans bottom teeths ska sjunka lite.

//vill vi ha en counter av hur många gånger man har lyckats klara sig från bettet?
// kanske lite text som gör en osäker på sina val, timer?






let firstUpperTooth = document.querySelector(".toothUpOne")
let secUpperTooth = document.querySelector(".toothUpTwo")
let thirdUpperTooth = document.querySelector(".toothUpThree")
let fourUpperTooth = document.querySelector(".toothUpFour")
let fiveUpperTooth = document.querySelector(".toothUpFive")
let topTeeths = [firstUpperTooth, secUpperTooth, thirdUpperTooth, fourUpperTooth, fiveUpperTooth]


let firstBottomTooth = document.querySelector(".toothDownOne")
let secondBottomTooth = document.querySelector(".toothDownTwo")
let thirdBottomTooth = document.querySelector(".toothDownThree")
let fourBottomTooth = document.querySelector(".toothDownFour")
let fiveBottomTooth = document.querySelector(".toothDownFive")

let bottomTeeths = [firstBottomTooth, secondBottomTooth, thirdBottomTooth, fourBottomTooth, fiveBottomTooth]

let arrayOfStrings: string[] = ["Are you sure?", "STOOOOOP!!!", "You'll regret your actions!", "DON'T!!", "Soon you'll be tomato paste", "What if... you die?", "This one is safe", "Don't worry my friend", "Time is ticking.."]
let randomNr: number = Math.floor(Math.random() * 5);

interface Player{
name: string | number,
points: number,
age: number
}
let myPlayer: Player;

(function createStart () {
let {btnSubmit,startDiv,inputName, inputAge} = createElements();

btnSubmit.addEventListener("click", () => {
myPlayer = createPlayer(inputName,inputAge);

startDiv.remove();
gameLogic(myPlayer);
})
})();

function createPlayer (inputName:HTMLInputElement,
inputAge:HTMLInputElement)
:Player {

let myPlayer:Player = {
   name:inputName.value,
   points:0,
   age:Number(inputAge.value) 
}
return myPlayer;
}

function createElements():{ btnSubmit: HTMLButtonElement, startDiv: HTMLElement,inputName:HTMLInputElement, inputAge:HTMLInputElement }{
const startDiv = document.createElement("div") as HTMLElement;
startDiv.className="Start";
const h1 = document.createElement("h1") as HTMLElement;
const p = document.createElement("p") as HTMLElement;
const inputName = document.createElement("input") as HTMLInputElement;
const inputAge = document.createElement("input") as HTMLInputElement;


const btnSubmit = document.createElement("button") as HTMLButtonElement;
btnSubmit.innerText = "Let's go"
h1.innerText = "Hi Player!";
p.innerText = `Welcome to Chewer, please fill out your information and hit the button to start the game!`

startDiv.append(h1,p,inputName, inputAge, btnSubmit);
document.body.append(startDiv);
return {btnSubmit, startDiv, inputName, inputAge };
}

// Gamelogic, takes in a random tooth that is falling down, if it doesnt fall down player gets a point
function gameLogic (player:Player) {
    console.log(player);
    const deadlyTooth = bottomTeeths.filter((tooth, index) => index === randomNr);
    const firstTooth = deadlyTooth?.[0] ?? null;
    const upperTeethDeadly = topTeeths.filter((tooth, index) => index === randomNr)
    const UpperTeeth = upperTeethDeadly?.[0] ?? null


    if (firstTooth) {
        firstTooth.id = "deadly";
    }

    let foundTooth:boolean = false;
    bottomTeeths.forEach(tooth => {
        tooth?.addEventListener("click", () => {
            
            console.log(tooth);
            if (tooth.id === "deadly" && UpperTeeth !== null) {
                
                UpperTeeth.id = "down";
                setTimeout(() => {
                    isGameover(player);
                  }, 3000);
            foundTooth = true;

            } else if (tooth.id === "" && !foundTooth) {
                console.log(foundTooth);
                tooth.id = "sink";
                player.points=  player.points + 1;
                console.log(player.points);
            } 
        });
    })

};

let div = document.createElement("div");
div.className = "text";
document.body.appendChild(div);

let colors:string[] = ["red","blue","orange","purple","pink","green"];

// Just some textstrings that are random written when mouseover
(() => {
    bottomTeeths.forEach(tooth => {
        tooth?.addEventListener("mouseover", () => {
            let p = document.createElement("p");
            let choosenWord: string = arrayOfStrings[Math.floor(Math.random() * arrayOfStrings.length)];
            p.innerText = choosenWord;
            p.className="stressText";
            p.style.color =randColors(colors);
            div.append(p); 
            setTimeout(() => {
                p.remove();
              }, 3000)
        })
    })
})();

function randColors (arr:any[]):string{ //kanske kan använda denna funktionen till mera saker?
const choosenColor = colors[Math.floor(Math.random()* colors.length)]
return choosenColor; 
}

let Highscore:number[] = []; //vill vi göra ett object som ska vara en spelare, 
//där hans score och namn kommer med på en lista? 
// vi vill kanske ha en div innan gamet där man måste inputa name 
//som vi sen kan lägga i ett object
(function displayHighscore (){

})();

//RANDOM SUPER TOOTH?


function isGameover (player:Player):void {
    Highscore.push(player.points)
    console.log(Highscore);
    let gameoverDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let continueBtn = document.createElement("button");
    continueBtn.innerText = "Try Again";
    p.innerText = `${player.name} score: ${player.points}`;

    h1.innerText =player.points<=2 ? "YOU SHOULD BE PUT IN JAIL" :"NICELY DONE MATE"  
    gameoverDiv.className = "gameover";
    
    gameoverDiv.append(h1,p, continueBtn);
    document.body.append(gameoverDiv);
    //can we do like a gamble here? like you take in your totalpoints and if you guess the right box you can double
    // or you will lose half of your points or keep the points you had.

    continueBtn.addEventListener("click", () => {
        location.reload();
    })
    //kanske få slänga in detta i click functionen? 
    // vi behöver lyssna på om det är clickat och att det inte är #id sink
    //så ger vi poäng tills eller om vi har utlöst id #down.
    // om det har kommit en id #down så måste vi skapa en div som säger gameover
    // vi vill också storea det i en array


    //topTeeths
};

// function topScore () {
// presumably we could fit an array and list the best high score here.
// }




















/***following blob***/
// const section = document.querySelector("section");
// const blob = document.getElementById("blob");
// section!.onpointermove = event => {
//     console.log(event.clientX);
//     let {clientX, clientY} = event; 
//     if (blob) {
//         blob.style.left = `${clientX}px`;
//         blob.style.top = `${clientY}px`;
//     }  else {
//         console.error("Blob element not found.");
//     }

// }

