// const myArray:number[] = [1,2,3,4,5];
// const totalSumWithMathpow = (myArray: number[]):number => {
//     let arrayOfPow:number[] = myArray.map((number: number) => Math.pow(number,2));
//     let totalSum:number = arrayOfPow.reduce((prev,next) => prev + next, 0)
//     return totalSum;
// }
// console.log(totalSumWithMathpow(myArray))
// console.log(myArray);
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
var arrayOfStrings = ["Are you sure?", "You'll regret your actions!", "DON'T!!", "Soon you'll be Tomato paste", "What if... you die?", "This one is safe", "Don't worry my friend", "Time is ticking.."];
var randomNr = Math.floor(Math.random() * 5);
(function () {
    var _a, _b;
    var deadlyTooth = bottomTeeths.filter(function (tooth, index) { return index === randomNr; });
    var firstTooth = (_a = deadlyTooth === null || deadlyTooth === void 0 ? void 0 : deadlyTooth[0]) !== null && _a !== void 0 ? _a : null; // Destructure the first element from the array
    var upperTeethDeadly = topTeeths.filter(function (tooth, index) { return index === randomNr; });
    var UpperTeeth = (_b = upperTeethDeadly === null || upperTeethDeadly === void 0 ? void 0 : upperTeethDeadly[0]) !== null && _b !== void 0 ? _b : null;
    if (firstTooth) {
        firstTooth.id = "deadly";
    }
    bottomTeeths.forEach(function (tooth) {
        tooth === null || tooth === void 0 ? void 0 : tooth.addEventListener("click", function () {
            console.log(tooth);
            if (tooth.id === "deadly" && UpperTeeth !== null) {
                UpperTeeth.id = "down";
                console.log(UpperTeeth);
            }
            else {
                console.log("Bad");
            }
        });
    });
})();
// behöver ett ID som är beforedeath alltså sen death ontrigger? alltså att tanden går ner, och detta ID 
//ska random ges till någon av de tänderna som är uppe, detta id aktiveras 
// när tanden under har tryckts på
// de andra tänderna där uppe ska bara stanna kvar, medans bottom teeths ska sjunka lite. 
//vill vi ha en counter av hur många gånger man har lyckats klara sig från bettet?
// kanske lite text som gör en osäker på sina val, timer?
