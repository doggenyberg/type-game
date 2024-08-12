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

const loadDefaultValues = async () => {
  await getEnglishWords();
  await getSwedishWords();
  updateLanguage();
  updateDifficulty();
  getRandomWord();
};

const getEnglishWords = async () => {
  try {
    const res = await fetch("./src/englishWords.json");
    const data = await res.json();
    allEnglishWords = data.englishWords;
    filterArrDifficulty();
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

const getRandomWord = (arr) => {
  try {
    return arr[Math.floor(Math.random() * language.length)];
  } catch {
    return "Type to start";
  }
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
  const words = getDifficulty(difficulty);
  updateWord(words);
};

const getDifficulty = (difficulty) => {
  if (language == "English") {
    switch (difficulty) {
      case "Easy":
        return easyEnglishWords;
      case "Medium":
        return mediumEnglishWords;
      case "Hard":
        return allEnglishWords;
    }
  }
  if (language == "Swedish") {
    switch (difficulty) {
      case "Easy":
        return easySwedishWords;
      case "Medium":
        return mediumSwedishWords;
      case "Hard":
        return allSwedishWords;
    }
  }
};

const updateLanguage = () => {
  language = languageElement.value;
  updateWord();
};

const updateWord = (arr) => {
  if (language == "English") {
    word.innerHTML = getRandomWord(arr);
  }
  if (language == "Swedish") {
    word.innerHTML = getRandomWord(arr);
  }
};

const playGame = (timer, difficulty) => {};

inputField.addEventListener("input", function (e) {
  console.log(e.target.value);
});

loadDefaultValues()