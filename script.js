const word = document.getElementById("word");
const inputField = document.getElementById("input");
const difficultyElement = document.getElementById("difficulty");
const languageElement = document.getElementById("language");
const timerElement = document.getElementById("timer");

let timer = 30000;
let record = 0;
let language = languageElement.value;
let difficulty = difficultyElement.value;

let englishWords = [];
let swedishWords = [];

const getEnglishWords = () => {
  fetch("./src/englishWords.json")
    .then((res) => res.json())
    .then((data) => {
      englishWords = data;
    })
    .catch((error) => console.error("Error loading English words: ", error));
};

const getSwedishWords = () => {
  fetch("./src/swedishWords.json")
    .then((res) => res.json())
    .then((data) => {
      swedishWords = data;
      
    })
    .catch((error) => console.error("Error loading Swedish words: ", error));
};

const getRandomWord = async (language) => {
  // HÄR FELAR DET!!!!
  // Den returnerar undefined
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

const updateWord = () => {
  if (language == "English") {
    console.log(englishWords)
    word.innerHTML = getRandomWord(englishWords);
  }
  if (language == "Swedish") {
    word.innerHTML = getRandomWord(swedishWords);
  }
};

inputField.addEventListener("input", function () {});

getEnglishWords();
getSwedishWords();
updateWord();
