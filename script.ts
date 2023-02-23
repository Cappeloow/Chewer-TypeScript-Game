
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

let arrayOfStrings: string[] = ["Are you sure?", "STOOOOOP!!!", "You'll regret your actions!", "DON'T!!", "Soon you'll be tomato paste", "What if... you die?", "This one is safe", "Don't worry my friend", "Time is ticking..", "YOU WILL GET SMASHED"]
let randomNr: number = Math.floor(Math.random() * 5);

interface Player {
    name: string,
    points: number,
    age: number
}

let myPlayer: Player;
let Highscore: Player[] = [];

(function init() {
    const storedHighscore = localStorage.getItem("highscore");
    if (storedHighscore) {
        Highscore = JSON.parse(storedHighscore);
    }
})();

(function createStart() {
    let { btnSubmit, startDiv, inputName, inputAge } = createElements();


    btnSubmit.addEventListener("click", () => {
        if (inputName.value.length >= 2 && inputAge.value.length >= 1) {
            myPlayer = createPlayer(inputName, inputAge);

            inputName.style.border = "3px solid green";
            inputAge.style.border = "3px solid green";
            setTimeout(() => {
                startDiv.remove();
                gameLogic(myPlayer);
            }, 1000)

        } else {
            inputName.style.border = "3px solid red";
            inputAge.style.border = "3px solid red";
        }

    })
})();

function createPlayer(inputName: HTMLInputElement,
    inputAge: HTMLInputElement)
    : Player {

    let myPlayer: Player = {
        name: inputName.value,
        points: 0,
        age: Number(inputAge.value)
    }
    return myPlayer;
}

function createElements(): { btnSubmit: HTMLButtonElement, startDiv: HTMLElement, inputName: HTMLInputElement, inputAge: HTMLInputElement } {
    const startDiv = document.createElement("div") as HTMLElement;
    startDiv.className = "Start";
    const h1 = document.createElement("h1") as HTMLElement;
    const p = document.createElement("p") as HTMLElement;
    const inputName = document.createElement("input") as HTMLInputElement;
    const inputAge = document.createElement("input") as HTMLInputElement;
    inputAge.placeholder = "YOUR AGE";
    inputName.placeholder = "YOUR NAME";
    const btnSubmit = document.createElement("button") as HTMLButtonElement;
    btnSubmit.innerText = "Let's go"
    h1.innerText = "Hi Player!";
    p.innerText = `Welcome to Chewer, please fill out your information and hit the button to start the game!`


    startDiv.append(h1, p, inputName, inputAge, btnSubmit);

    if (Highscore.length >= 1) {
        Highscore.sort((a, b) => b.points - a.points);
        let divOfTopPlayer = document.createElement("div") as HTMLElement;
        divOfTopPlayer.id = "divOfTopList";
        let toplist = document.createElement("p") as HTMLElement;
        toplist.innerText = `TOP: ${Highscore[0].name.toUpperCase()} - ${Highscore[0].points.toString()} points`;
        divOfTopPlayer.append(toplist);
        startDiv.append(divOfTopPlayer);
    }

    document.body.append(startDiv);
    return { btnSubmit, startDiv, inputName, inputAge };
}

// Gamelogic, takes in a random tooth that is falling down, if it doesnt fall down player gets a point
const gameLogic = (player: Player) => {
    console.log(player);
    const deadlyTooth = bottomTeeths.filter((tooth, index) => index === randomNr);
    const firstTooth = deadlyTooth?.[0] ?? null;
    const upperTeethDeadly = topTeeths.filter((tooth, index) => index === randomNr)
    const UpperTeeth = upperTeethDeadly?.[0] ?? null


    if (firstTooth) {
        firstTooth.id = "deadly";
    }

    let foundTooth: boolean = false;
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
                player.points = player.points + 1;
                console.log(player.points);
            }
        });
    })

};

let div = document.createElement("div");
div.className = "text";
document.body.appendChild(div);

let colors: string[] = ["red", "blue", "orange", "purple", "pink", "green"];

(() => {
    bottomTeeths.forEach(tooth => {
        tooth?.addEventListener("mouseover", () => {
            let p = document.createElement("p");
            let choosenWord: string = arrayOfStrings[Math.floor(Math.random() * arrayOfStrings.length)];
            p.innerText = choosenWord;
            p.className = "stressText";
            p.style.color = randColors(colors);
            div.append(p);
            setTimeout(() => {
                p.remove();
            }, 3000)
        })
    })
})();

const randColors = (arr: string[]): string => { 
    const choosenColor = arr[Math.floor(Math.random() * colors.length)]
    return choosenColor;
}


(function displayHighscore() {

})();



const isGameover = (player: Player): void => {
    Highscore.push(player);
    localStorage.setItem("highscore", JSON.stringify(Highscore));
    console.log(Highscore);
    let gameoverDiv = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let continueBtn = document.createElement("button");
    continueBtn.innerText = "Try Again";
    p.innerText = `${player.name} score: ${player.points}`;

    h1.innerText = player.points <= 2 ? "YOU SHOULD BE PUT IN JAIL" : "NICELY DONE MATE"
    gameoverDiv.className = "gameover";



    gameoverDiv.append(h1, p, continueBtn);
    document.body.append(gameoverDiv);

    continueBtn.addEventListener("click", () => {
        location.reload();
    })
   
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

