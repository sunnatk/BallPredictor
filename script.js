let wrongQuestion = [
  "как",
  "почему",
  "где",
  "когда",
  "каким",
  "что",
  "куда",
  "сколько",
  "какой",
  "кто",
  "который",
  "зачем",
  "откуда",
  "чей",
  "что такое",
  "какими",
  "какому",
  "чего",
  "чем",
];
let answers = [
  "да",
  "конечно",
  "бесспорно",
  "должно быть так",
  "возможно",
  "шансов мало",
  "нет",
  "звезды говорят нет",
  "не могу сказать",
  "сейчас неизвестно",
  "спросите позже",
];
let letters = ["a", "b", "c", "d", "e",'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let button = document.querySelector("#button");
let balltextAnswer = document.querySelector(".balltextAnswer");
let input = document.querySelector(".input");

function getAnswer() {
  let word = input.value.split(" ")[0].toLowerCase();
  let letter = input.value.split("")[0].toLowerCase();

  if (wrongQuestion.some((el) => el == word)) {
    balltextAnswer.textContent = "Задайте вопрос ответ которого Да или Нет";
  } else if ((el) => el !== word) {
    balltextAnswer.textContent =
      answers[Math.floor(Math.random() * answers.length)];
  }
  if (letters.some((el) => el == letter)) {
    balltextAnswer.textContent = "Введите текст на руском языке";
  }
  input.value = "";
  
  
}
button.addEventListener("click", getAnswer);
  
input.addEventListener("keypress", function (e) {
  let key = e.key || String.fromCharCode(e.Code);
  if (key === "Enter") {
    button.click();
  }
});
button.addEventListener("click", comp);
