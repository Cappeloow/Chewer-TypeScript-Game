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
var arrayOfStrings = ["Are you sure?", "STOOOOOP!!!", "You'll regret your actions!", "DON'T!!", "Soon you'll be tomato paste", "What if... you die?", "This one is safe", "Don't worry my friend", "Time is ticking..", "YOU WILL GET SMASHED"];
var randomNr = Math.floor(Math.random() * 5);
var myPlayer;
var Highscore = [];
(function init() {
    var storedHighscore = localStorage.getItem("highscore");
    if (storedHighscore) {
        Highscore = JSON.parse(storedHighscore);
    }
})();
(function createStart() {
    var _a = createElements(), btnSubmit = _a.btnSubmit, startDiv = _a.startDiv, inputName = _a.inputName, inputAge = _a.inputAge;
    btnSubmit.addEventListener("click", function () {
        if (inputName.value.length >= 2 && inputAge.value.length >= 1) {
            myPlayer = createPlayer(inputName, inputAge);
            inputName.style.border = "3px solid green";
            inputAge.style.border = "3px solid green";
            setTimeout(function () {
                startDiv.remove();
                gameLogic(myPlayer);
            }, 1000);
        }
        else {
            inputName.style.border = "3px solid red";
            inputAge.style.border = "3px solid red";
        }
    });
})();
function createPlayer(inputName, inputAge) {
    var myPlayer = {
        name: inputName.value,
        points: 0,
        age: Number(inputAge.value)
    };
    return myPlayer;
}
function createElements() {
    var startDiv = document.createElement("div");
    startDiv.className = "Start";
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    var inputName = document.createElement("input");
    var inputAge = document.createElement("input");
    inputAge.placeholder = "YOUR AGE";
    inputName.placeholder = "YOUR NAME";
    var btnSubmit = document.createElement("button");
    btnSubmit.innerText = "Let's go";
    h1.innerText = "Hi Player!";
    p.innerText = "Welcome to Chewer, please fill out your information and hit the button to start the game!";
    startDiv.append(h1, p, inputName, inputAge, btnSubmit);
    if (Highscore.length >= 1) {
        Highscore.sort(function (a, b) { return b.points - a.points; });
        var divOfTopPlayer = document.createElement("div");
        divOfTopPlayer.id = "divOfTopList";
        var toplist = document.createElement("p");
        toplist.innerText = "TOP: ".concat(Highscore[0].name.toUpperCase(), " - ").concat(Highscore[0].points.toString(), " points");
        divOfTopPlayer.append(toplist);
        startDiv.append(divOfTopPlayer);
    }
    document.body.append(startDiv);
    return { btnSubmit: btnSubmit, startDiv: startDiv, inputName: inputName, inputAge: inputAge };
}
// Gamelogic, takes in a random tooth that is falling down, if it doesnt fall down player gets a point
var gameLogic = function (player) {
    var _a, _b;
    console.log(player);
    var deadlyTooth = bottomTeeths.filter(function (tooth, index) { return index === randomNr; });
    var firstTooth = (_a = deadlyTooth === null || deadlyTooth === void 0 ? void 0 : deadlyTooth[0]) !== null && _a !== void 0 ? _a : null;
    var upperTeethDeadly = topTeeths.filter(function (tooth, index) { return index === randomNr; });
    var UpperTeeth = (_b = upperTeethDeadly === null || upperTeethDeadly === void 0 ? void 0 : upperTeethDeadly[0]) !== null && _b !== void 0 ? _b : null;
    if (firstTooth) {
        firstTooth.id = "deadly";
    }
    var foundTooth = false;
    bottomTeeths.forEach(function (tooth) {
        tooth === null || tooth === void 0 ? void 0 : tooth.addEventListener("click", function () {
            console.log(tooth);
            if (tooth.id === "deadly" && UpperTeeth !== null) {
                UpperTeeth.id = "down";
                setTimeout(function () {
                    isGameover(player);
                }, 3000);
                foundTooth = true;
            }
            else if (tooth.id === "" && !foundTooth) {
                console.log(foundTooth);
                tooth.id = "sink";
                player.points = player.points + 1;
                console.log(player.points);
            }
        });
    });
};
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
var randColors = function (arr) {
    var choosenColor = arr[Math.floor(Math.random() * colors.length)];
    return choosenColor;
};
(function displayHighscore() {
})();
var isGameover = function (player) {
    Highscore.push(player);
    localStorage.setItem("highscore", JSON.stringify(Highscore));
    console.log(Highscore);
    var gameoverDiv = document.createElement("div");
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    var continueBtn = document.createElement("button");
    continueBtn.innerText = "Try Again";
    p.innerText = "".concat(player.name, " score: ").concat(player.points);
    h1.innerText = player.points <= 2 ? "YOU SHOULD BE PUT IN JAIL" : "NICELY DONE MATE";
    gameoverDiv.className = "gameover";
    gameoverDiv.append(h1, p, continueBtn);
    document.body.append(gameoverDiv);
    continueBtn.addEventListener("click", function () {
        location.reload();
    });
};
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
