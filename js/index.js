const questionList = document.querySelectorAll(".li-question"),
      questionBlock = document.querySelector(".bot-message-questions"),
      botContainer = document.querySelector(".bot-container"),
      userAnswer = document.createElement("div"),
      userMessage = document.createElement("p");
    
userMessage.classList.add("message");      
userAnswer.appendChild(userMessage);      
userAnswer.classList.add("user-answer")

questionList.forEach((elem) => {
    elem.addEventListener("click", () => {
        botContainer.appendChild(userAnswer);
        userMessage.textContent = elem.textContent;
    })
});