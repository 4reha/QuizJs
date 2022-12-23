const statement = document.querySelector("#statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.querySelector("#explanation");

const fact = {
    statement: "The Earth is round",
    answer: true,
    explanation: "The Earth is round because it is a sphere."
}

statement.textContent = fact.statement;

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
        for (let btn of optionButtons)
            disable(btn);
        let guess = button.value;
        if (isCorrect(guess))
            event.target.classList.add("correct");
        else
            event.target.classList.add("incorrect");
    })
}




