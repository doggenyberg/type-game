const word = document.getElementById("word");
const inputField = document.getElementById("input");
const difficultyElement = document.getElementById("difficulty");
const languageElement = document.getElementById("language");
const timerElement = document.getElementById("timer");

let timer = 30000;
let record = 0;
let language = languageElement.value;
let difficulty = difficultyElement.value;
console.log(difficulty)

const changeTimer = () => {
    const currentTimeValue = timerElement.innerHTML;
  if (currentTimeValue === "30") {
    timer = 60000;
    timerElement.innerHTML = "60";
  }
  if (currentTimeValue === "60") {
    timer = 10000;
    timerElement.innerHTML = "10";
  }
  if (currentTimeValue == "10") {
    timer = 30000;
    timerElement.innerHTML = "30";
  }
};

const updateDifficulty = () => {
    asdas

    if (difficultyElement.innerHTML == "Easy") {
        difficulty = "easy";
        console.log("here")
    }
    if (difficultyElement.innerHTML == "Medium") {
        difficulty = "medium";
    }
    if (difficultyElement.innerHTML == "Hard") {
        difficulty = "hard";
    }
    console.log(difficulty);
}
