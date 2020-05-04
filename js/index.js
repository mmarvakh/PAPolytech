
const questionList = document.querySelectorAll(".li-question"),
      botContainer = document.querySelector(".bot-container"),
      userAnswer = document.createElement("div"),
      userMessage = document.createElement("p"),
      botAnswer = document.createElement("div"),
      botMessage = document.createElement("p"),
      answersInCategories = document.createElement("ul");

userMessage.classList.add("message");
userAnswer.classList.add("user-answer");
answersInCategories.classList.add("bot-message-green")

const categoryFirst = {
    questionFirst: "Первый вопрос категории 1",
    questionSecond: "Второй вопрос категории 1",
    questionThird: "Третий вопрос категории 1",
    questionFourth: "Четвёртый вопрос категории 1",
}

const categorySecond = {
    questionFirst: "Первый вопрос категории 2",
    questionSecond: "Второй вопрос категории 2",
    questionThird: "Третий вопрос категории 2",
    questionFourth: "Четвёртый вопрос категории 2",
}

const categoryThird = {
    questionFirst: "Первый вопрос категории 3",
    questionSecond: "Второй вопрос категории 3",
    questionThird: "Третий вопрос категории 3",
    questionFourth: "Четвёртый вопрос категории 3",
}

const categoryFourth = {
    questionFirst: "Первый вопрос категории 4",
    questionSecond: "Второй вопрос категории 4",
    questionThird: "Третий вопрос категории 4",
    questionFourth: "Четвёртый вопрос категории 4",
}

const arrayOfCategories = [categoryFirst, categorySecond, categoryThird, categoryFourth]

Object.keys(categoryFirst).length

questionList.forEach((elem) => {

    elem.addEventListener("click", () => {

        let cloneOfUserAnswer = userAnswer.cloneNode(true),
            cloneOfUserMessage = userMessage.cloneNode(true);
             
        cloneOfUserAnswer.appendChild(cloneOfUserMessage);     
        
        botContainer.appendChild(cloneOfUserAnswer);

        cloneOfUserMessage.textContent = elem.textContent;

        arrayOfCategories.forEach((element) => {

            if (arrayOfCategories.indexOf(element) == elem.id) {

                let cloneOfAnswers = answersInCategories.cloneNode(true);

                for (key in element) {
                    let li = document.createElement("li");

                    li.classList.add("li-question");

                    li.textContent = element[key];

                    cloneOfAnswers.appendChild(li);
                }

                botContainer.appendChild(cloneOfAnswers)

            }

        })

        

    })

});

/*if (elem.classList.contains("question-first")) {
    botMessage.classList.add("message");
    botMessage.classList.add("answer")
    botAnswer.appendChild(botMessage);

    botAnswer.classList.add("bot-message-green");
    botContainer.appendChild(botAnswer);

    botMessage.textContent = answerFirst;
}*/