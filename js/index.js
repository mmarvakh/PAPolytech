
const questionList = document.querySelectorAll(".li-question"),
      botContainer = document.querySelector(".bot-container"),
      userAnswer = document.createElement("div"),
      userMessage = document.createElement("p"),
      botAnswer = document.createElement("div"),
      botMessage = document.createElement("p"),
      answersInCategories = document.createElement("ul");

let questionListWithAnswers = document.querySelectorAll(".question-list");

userMessage.classList.add("message");
userAnswer.classList.add("user-answer");

botMessage.classList.add("message");
botAnswer.classList.add("bot-message");

answersInCategories.classList.add("bot-message-green");

let countForLi = 0;

// Категории
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

// Ответы
const answersOnFirstCategory = {
    0: "Ответ на первый вопрос категории 1",
    1: "Ответ на второй вопрос категории 1",
    2: "Ответ на третий вопрос категории 1",
    3: "Ответ на четвертый вопрос категории 1"
}

const answersOnSecondCategory = {
    0: "Ответ на первый вопрос категории 2",
    1: "Ответ на второй вопрос категории 2",
    2: "Ответ на третий вопрос категории 2",
    3: "Ответ на четвертый вопрос категории 2"
}

const answersOnThirdCategory = {
    0: "Ответ на первый вопрос категории 3",
    1: "Ответ на второй вопрос категории 3",
    2: "Ответ на третий вопрос категории 3",
    3: "Ответ на четвертый вопрос категории 3"
}

const answersOnFourthCategory = {
    0: "Ответ на первый вопрос категории 4",
    1: "Ответ на второй вопрос категории 4",
    2: "Ответ на третий вопрос категории 4",
    3: "Ответ на четвертый вопрос категории 4"
}

const arrayOfCategories = [categoryFirst, categorySecond, categoryThird, categoryFourth],
      arrayOfAnswers = [answersOnFirstCategory, answersOnSecondCategory, answersOnThirdCategory, answersOnFourthCategory];

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

                cloneOfAnswers.classList.add("question-list");

                for (key in element) {

                    let li = document.createElement("li");

                    li.classList.add("li-question");

                    li.id = countForLi;

                    countForLi++;

                    li.textContent = element[key];

                    cloneOfAnswers.appendChild(li);

                }

                countForLi = 0;

                botContainer.appendChild(cloneOfAnswers);

            }

        });

        questionListWithAnswers = document.querySelectorAll(".question-list");

        questionListWithAnswers.forEach((elemLi) => {

            let li = elemLi.querySelectorAll("li");
        
            li.forEach((liElem) => {
        
                liElem.addEventListener("click", () => {
        
                    let cloneOfUserAnswer = userAnswer.cloneNode(true),
                        cloneOfUserMessage = userMessage.cloneNode(true);
             
                    cloneOfUserAnswer.appendChild(cloneOfUserMessage);     
        
                    botContainer.appendChild(cloneOfUserAnswer);

                    cloneOfUserMessage.textContent = liElem.textContent;

                    arrayOfAnswers.forEach((point) => {

                        if (arrayOfAnswers.indexOf(point) == liElem.id) {

                            let cloneOfBotAnswer = botAnswer.cloneNode(true),
                                cloneOfBotMessage = botMessage.cloneNode(true);
                            
                            for (key in point) {

                                if (key == liElem.id) {

                                    cloneOfBotMessage.textContent = point[key];

                                    cloneOfBotAnswer.appendChild(cloneOfBotMessage);

                                }

                            }

                            botContainer.appendChild(cloneOfBotAnswer);

                        }

                    });
        
                });
        
            });
        
        });

    });

});

/*if (elem.classList.contains("question-first")) {
    botMessage.classList.add("message");
    botMessage.classList.add("answer")
    botAnswer.appendChild(botMessage);

    botAnswer.classList.add("bot-message-green");
    botContainer.appendChild(botAnswer);

    botMessage.textContent = answerFirst;
}*/