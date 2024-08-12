const word = document.getElementById("word");
const inputField = document.getElementById("input");
const difficultyElement = document.getElementById("difficulty");
const languageElement = document.getElementById("language");
const timerElement = document.getElementById("timer");

let timer = 30000;
let record = 0;
let language = languageElement.value;
let difficulty = difficultyElement.value;

let easyEnglishWords = [];
let easySwedishWords = [];
let mediumEnglishWords = [];
let mediumSwedishWords = [];
let allEnglishWords = [];
let allSwedishWords = [];
let playing = false;

const getEnglishWords = async () => {
  try {
    const res = await fetch("./src/englishWords.json");
    const data = await res.json();
    allEnglishWords = data.englishWords;
    filterArrDifficulty()
  } catch (e) {
    console.error("Could not retrieve English words: " + e);
  }
};

const getSwedishWords = async () => {
  try {
    const res = await fetch("./src/swedishWords.json");
    const data = await res.json();
    allSwedishWords = data.allSwedishWords;
  } catch (e) {
    console.error("Error loading Swedish words: ", error);
  }
};

const filterArrDifficulty = () => {
  easyEnglishWords = allEnglishWords.filter((word) => word.length < 6);
  easySwedishWords = allSwedishWords.filter((word) => word.length < 6);
  mediumEnglishWords = allEnglishWords.filter((word) => word.length < 9);
  mediumSwedishWords = allSwedishWords.filter((word) => word.length < 9);
};

const getRandomWord = (language) => {
  return language[Math.floor(Math.random() * language.length)];
};

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
  difficulty = difficultyElement.value;
  updateWord();
};

const updateLanguage = () => {
  language = languageElement.value;
  updateWord();
};

const updateWord = (difficulty) => {
  if (language == "English") {
    word.innerHTML = getRandomWord(allEnglishWords);
  }
  if (language == "Swedish") {
    word.innerHTML = getRandomWord(allSwedishWords);
  }
};

const playGame = (timer, difficulty) => {};

inputField.addEventListener("input", function (e) {
  console.log(e.target.value);
});

getEnglishWords();
getSwedishWords();
setTimeout(updateWord, 500);
