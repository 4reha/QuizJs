import questions from "./questions.json" assert { type: "json" };
const statement = document.querySelector("#statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.querySelector("#explanation");
const nextBtn = document.querySelector("#next");
let fact = {};

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getReset() {
    disable(nextBtn);
    enable(optionButtons[0]);
    enable(optionButtons[1]);
    for (let button of optionButtons) {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
    }
    explanation.textContent = "";
}

function getQuestion() {
    getReset();
    if (questions.length)   {
        let index = getRandomInt(questions.length);
        fact = questions.splice(index, 1)[0];
        statement.textContent = fact.statement;
    }
    else {
        statement.textContent = "No more questions :P";
        disable(optionButtons[0]);
        disable(optionButtons[1]);
        disable(nextBtn);
        nextBtn.textContent = "No More";
        nextBtn.classList.add("nextDisabled");
    }
}

function disable(button) {
    button.setAttribute("disabled", "");
}
function enable(button) {
    button.removeAttribute("disabled");
}

function isCorrect(guess) {
    return (guess === fact.answer.toString()) ;
}
for (let button of optionButtons) {
    button.addEventListener("click", function(event) {
        explanation.textContent = fact.explanation;
        for (let btn of optionButtons)  {
            disable(btn);
            enable(nextBtn);
        }
        let guess = button.value;
        if (isCorrect(guess))
            event.target.classList.add("correct");
        else
            event.target.classList.add("incorrect");
    })
}
nextBtn.addEventListener("click", function(event) {
    getQuestion();
});

getQuestion();


