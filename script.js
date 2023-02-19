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
var firstUpperTooth = document.querySelector(".toothUpOne");
var secUpperTooth = document.querySelector(".toothUpTwo");
var thirdUpperTooth = document.querySelector(".toothUpThree");
var fourUpperTooth = document.querySelector(".toothUpFour");
var fiveUpperTooth = document.querySelector(".toothUpFive");
var topTeeths = [firstUpperTooth, secUpperTooth, thirdUpperTooth, fourUpperTooth, fiveUpperTooth];
var firstBottomTooth = document.querySelector(".toothDownOne");
var secondBottomTooth = document.querySelector(".toothDownTwo");
var thirdBottomTooth = document.querySelector(".toothDownThree");
var fourBottomTooth = document.querySelector(".toothDownFour");
var fiveBottomTooth = document.querySelector(".toothDownFive");
var bottomTeeths = [firstBottomTooth, secondBottomTooth, thirdBottomTooth, fourBottomTooth, fiveBottomTooth];
var arrayOfStrings = ["Are you sure?", "STOOOOOP!!!", "You'll regret your actions!", "DON'T!!", "Soon you'll be tomato paste", "What if... you die?", "This one is safe", "Don't worry my friend", "Time is ticking.."];
var randomNr = Math.floor(Math.random() * 5);
(function () {
    var _a, _b;
    var deadlyTooth = bottomTeeths.filter(function (tooth, index) { return index === randomNr; });
    var firstTooth = (_a = deadlyTooth === null || deadlyTooth === void 0 ? void 0 : deadlyTooth[0]) !== null && _a !== void 0 ? _a : null;
    var upperTeethDeadly = topTeeths.filter(function (tooth, index) { return index === randomNr; });
    var UpperTeeth = (_b = upperTeethDeadly === null || upperTeethDeadly === void 0 ? void 0 : upperTeethDeadly[0]) !== null && _b !== void 0 ? _b : null;
    if (firstTooth) {
        firstTooth.id = "deadly";
    }
    var playerPoints = 0;
    var foundTooth = false;
    bottomTeeths.forEach(function (tooth) {
        tooth === null || tooth === void 0 ? void 0 : tooth.addEventListener("click", function () {
            console.log(tooth);
            if (tooth.id === "deadly" && UpperTeeth !== null) {
                UpperTeeth.id = "down";
                setTimeout(function () {
                    isGameover(playerPoints);
                }, 3000);
                foundTooth = true;
            }
            else if (tooth.id === "" && !foundTooth) {
                console.log(foundTooth);
                tooth.id = "sink";
                playerPoints = playerPoints + 1;
                console.log(playerPoints);
            }
        });
    });
})();
var div = document.createElement("div");
div.className = "text";
document.body.appendChild(div);
var colors = ["red", "blue", "orange", "purple", "pink", "green"];
(function () {
    bottomTeeths.forEach(function (tooth) {
        tooth === null || tooth === void 0 ? void 0 : tooth.addEventListener("mouseover", function () {
            var p = document.createElement("p");
            var choosenWord = arrayOfStrings[Math.floor(Math.random() * arrayOfStrings.length)];
            p.innerText = choosenWord;
            p.className = "stressText";
            p.style.color = randColors(colors);
            div.append(p);
            setTimeout(function () {
                p.remove();
            }, 3000);
        });
    });
})();
function randColors(arr) {
    var choosenColor = colors[Math.floor(Math.random() * colors.length)];
    return choosenColor;
}
var Highscore = []; //vill vi göra ett object som ska vara en spelare, 
//där hans score och namn kommer med på en lista? 
// vi vill kanske ha en div innan gamet där man måste inputa name 
//som vi sen kan lägga i ett object
function isGameover(points) {
    Highscore.push(points);
    console.log(Highscore);
    var gameoverDiv = document.createElement("div");
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    var continueBtn = document.createElement("button");
    continueBtn.innerText = "Try Again";
    p.innerText = "Your total score: ".concat(points);
    h1.innerText = points <= 2 ? "YOU SHOULD BE PUT IN JAIL" : "NICELY DONE MATE";
    gameoverDiv.className = "gameover";
    gameoverDiv.append(h1, p, continueBtn);
    document.body.append(gameoverDiv);
    continueBtn.addEventListener("click", function () {
        location.reload();
    });
    //kanske få slänga in detta i click functionen? 
    // vi behöver lyssna på om det är clickat och att det inte är #id sink
    //så ger vi poäng tills eller om vi har utlöst id #down.
    // om det har kommit en id #down så måste vi skapa en div som säger gameover
    // vi vill också storea det i en array
    //topTeeths
}
;
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
