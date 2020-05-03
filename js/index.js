
const questionList = document.querySelectorAll(".li-question"),
      questionBlock = document.querySelector(".bot-message-questions"),
      botContainer = document.querySelector(".bot-container"),
      userAnswer = document.createElement("div"),
      userMessage = document.createElement("p"),
      botAnswer = document.createElement("div"),
      botMessage = document.createElement("p");

const answerFirst = "Ответ на первый вопрос бла-бла-бла",
      answerSecond = "Ответ на второй вопрос бла-бла-бла",
      answerThird = "Ответ на третий вопрос бла-бла-бла",
      answerFourth = "Ответ на четвёртый вопрос бла-бла-бла";

questionList.forEach((elem) => {

    elem.addEventListener("click", () => {
        userMessage.classList.add("message");      
        userAnswer.appendChild(userMessage);     

        userAnswer.classList.add("user-answer")
        botContainer.appendChild(userAnswer);

        userMessage.textContent = elem.textContent;

        if (elem.classList.contains("question-first")) {
            console.log(1);
            botMessage.classList.add("message");
            botMessage.classList.add("answer")
            botAnswer.appendChild(botMessage);

            botAnswer.classList.add("bot-message-questions");
            botContainer.appendChild(botAnswer);

            botMessage.textContent = answerFirst;
        }

        if (elem.classList.contains("question-second")) {
            botMessage.classList.add("message");
            botMessage.classList.add("answer")
            botAnswer.appendChild(botMessage);

            botAnswer.classList.add("bot-message-questions");
            botContainer.appendChild(botAnswer);

            botMessage.textContent = answerSecond;
        }

        if (elem.classList.contains("question-third")) {
            botMessage.classList.add("message");
            botMessage.classList.add("answer")
            botAnswer.appendChild(botMessage);

            botAnswer.classList.add("bot-message-questions");
            botContainer.appendChild(botAnswer);

            botMessage.textContent = answerThird;
        }

        if (elem.classList.contains("question-fourth")) {
            botMessage.classList.add("message");
            botMessage.classList.add("answer")
            botAnswer.appendChild(botMessage);

            botAnswer.classList.add("bot-message-questions");
            botContainer.appendChild(botAnswer);

            botMessage.textContent = answerFourth;
        }

    })

});