// Инициализация существующих и добавление новых блоков
const botContainer = document.querySelector(".bot-container"),
      firstMessage = document.querySelector(".first-message"),
      userAnswer = document.createElement("div"),
      userMessage = document.createElement("p"),
      botAnswer = document.createElement("div"),
      botMessage = document.createElement("p"),
      datePosition = document.createElement("p"),
      answersInCategories = document.createElement("ul"),
      buttonShow = document.querySelector(".show"),
      buttonReset = document.querySelector(".reset"),
      categories = document.querySelectorAll(".categories")[0],
      dateOfMessage = document.querySelectorAll(".date-of-message");

let questionListWithAnswers = document.querySelectorAll(".question-list"),
    questionList = document.querySelectorAll(".li-question");

// Экземпляр объекта Date для добавления даты и времени под каждым сообщением
let dateOfBotMessage = new Date();

// Функция для форматирования и возврата значений даты и времени
const formatDate = (date) => {

    let hh = date.getHours();

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();

    return hh + ':' + min + ', ' + dd + '.' + mm + '.' + yy;

}

// Присвоение даты и времени самому первому приветственному сообщению от программы
dateOfMessage[0].textContent = formatDate(dateOfBotMessage);

// Добавление классов созданным блокам и параграфам
userMessage.classList.add("message");
userAnswer.classList.add("user-answer");
userAnswer.classList.add("copy");

botMessage.classList.add("message");
botAnswer.classList.add("bot-message");
botAnswer.classList.add("copy");

answersInCategories.classList.add("bot-message-green");
answersInCategories.classList.add("copy");

datePosition.classList.add("date-of-message")

// Счётчик для добавления id каждому пункту списка
let countForLi = 0,
    countID = 0;

// Категории вопросов
const categoryFirst = {
    questionFirst: "Кто выдает сертификаты?",
    questionSecond: "С чего нам начать?",
    questionThird: "В чём суть сертификации лесоуправления?",
    questionFourth: "В чём суть сертификации цепочки поставок?",
}

const categorySecond = {
    questionFirst: "Сколько стоит сертификация?",
    questionSecond: "Сколько стоят услуги органа по сертификации?",
    questionThird: "Сколько времени занимает получение сертификата?"
}

const categoryThird = {
    questionFirst: "Что делать, если в моем городе нет органов по сертификации / консультантов?",
    questionSecond: "Где и как нам пройти обучение?",
    questionThird: "Подскажите пожалуйста есть ли у вас региональные специалисты?"
}

const categoryFourth = {
    questionFirst: "Орган по сертификации проконсультирует нас, как выполнить ваши стандарты?",
    questionSecond: "FSC – это иностранная система?",
    questionThird: "Можем ли мы получить сертификат лесоуправления, если мы все делаем строго по законодательству?",
    questionFourth: "Как выяснить, есть ли сертификаты FSC у моих поставщиков?",
    questionFifth: "Если мы используем только сертифицированное сырье, но у нас нет сертификата, можем ли мы ставить логотип FSC на свою продукцию (например, если мы производим конечную продукцию только из сертифицированной FSC бумаги?)",
    questionSixth: "Как выбрать орган по сертификации?",
    questionSeventh: "Могу ли я продавать свою продукцию за границу без сертификата FSC?"
}

// Ответы на вопросы
const answersOnFirstCategory = {
    0: "Выдают сертификаты специальные независимые органы по сертификации, которые аккредитованы международной организацией по аккредитации ASI (Assurance Services International). Для получения сертификата компании нужно заключить договор с органом по сертификации и пройти аудит на соответствие требованиям стандартов FSC. Данные органы подвергаются регулярному контролю со стороны ASI. Выбор органа по сертификации является важным и ответственным шагом, следует учитывать не только ценовую политику, но и деловую репутацию.",
    1: "Для начала Вам необходимо определить вид сертификации и вид сертификата, которые необходимы вашей компании. Далее, вам нужно изучить необходимый <a href='https://ru.fsc.org/ru-ru/cert/standarty' target='_blank'>стандарт</a> и привести систему управления на вашем предприятии в соответствие с ними. Далее свяжитесь с одним или с несколькими FSC <a href='https://ru.fsc.org/ru-ru/cert/so' target='_blank'>аккредитованными органами</a> по сертификации (ОС), работающими в России. Чтобы оценить время, которое потребуется вам на подготовку к сертификации, и ее стоимость, ОС понадобятся некоторые основные сведения о вашей деятельности.",
    2: "Сертификация лесоуправления - это вид сертификации для владеющих или управляющих лесами организаций, которые хотят, чтобы их лесоуправление соответствовало требованиям <a href='https://ru.fsc.org/ru-ru/cert/principy' target='_blank'>принципов и критериев FSC</a>. Эти принципы адаптируются к конкретной стране в виде национальных стандартов. В России действует Национальный стандарт FSC. Соответственно, сертификат лесоуправления FSC в России может получить только та организация, чье лесоуправление соответствует требованиям Национального стандарта FSC.",
    3: "Сертификация цепочки поставок требуется производителям, переработчикам и продавцам FSC сертифицированной продукции. Сертификат цепочки поставок подтверждает, что продукция произведена именно из сырья, происходящего из лесов, где лесоуправление сертифицировано. Чтобы это требование соблюдалось, каждый участник цепочки поставок должен иметь такой сертификат. Только в этом случае конечный производитель сможет поставить логотип FSC на свою продукцию."
}

const answersOnSecondCategory = {
    0: "<span>Стоимость и сроки зависят от множества факторов и всегда индивидуальны. Стоимость складывается из нескольких составляющих:</span><br> <ul style='margin-top: 5%;'><li>Затраты на приведение деятельности компании в соответствие со стандартами;</li><li>Cтоимость услуг органа по сертификации;</li><li>Стоимость услуг консультантов (опционально).</li></ul>",
    1: "<span>Стоимость услуг ОС также зависит от множества факторов. Для сертификации лесоуправления это:</span><br> <ul style='margin-top: 5%;'><li>Структура и размер компании;</li><li>Методы управления и ведения хозяйственной деятельности;</li><li>Площадь сертифицируемой территории;</li><li>Количество лесных участков;</li><li>География расположения участков;</li><li>Транспортная доступность полевых объектов;</li><li>Расположение ключевых заинтересованных сторон;</li><li>Степень подготовленности клиента к выполнению требований FSC и др.</li></ul> <br> <span>Для сертификации цепочки поставок (без контролируемой древесины) это:</span> <br> <ul style='margin-top: 5%;'><li>Cхема сертификации (групповая, мульти-сайт, индивидуальная);</li><li>Область действия сертификата (продукция, площадки, объекты и др.);</li><li>Годовой оборот компании;</li><li>География и количество объектов для оценки (офисы, склады, производственные базы);</li><li>Наличие или отсутствие подрядчиков, которые требуют полевой оценки и др.</li></ul><br> <span>Для сертификации цепочки поставок (с контролируемой древесиной). Все факторы, перечисленные выше для цепочки поставок, и дополнительно:</span> <br> <ul style='margin-top: 5%;'><li>География и количество поставщиков контролируемой древесины;</li><li>Расположение ключевых заинтересованных сторон;</li><li>Степень подготовленности клиента и его поставщиков к выполнению требований FSC и др.</li></ul><br> <span>Стоимость услуг органов по сертификации во многих случаях рассчитывается индивидуально. Нередко предоставляются скидки, в частности, при сертификации по нескольким схемам одновременно, или если сертифицируются два или более предприятий от одного собственника, или если сертифицируются одновременно лесоуправление и цепочка поставок.</span>",
    2: "Сроки зависят от множества факторов и всегда индивидуальны. По экспертным оценкам, срок получения сертификата лесоуправления (FM) составляет в среднем от 6 до 12 месяцев, в случае сертификата цепочки поставок (CoC) этот срок значительно меньше от 1 до 3 месяцев. Для получения сертификата цепочки поставок с контролируемой древесиной это время может составить в среднем от 3 до 6 месяцев."
}

const answersOnThirdCategory = {
    0: "Органы по сертификации работают по всей России и не привязаны к конкретному городу. В перечне консультантов на сайте FSC России есть указание на регионы их деятельности, но они также не привязаны к конкретному населенному пункту.",
    1: "FSC России предлагает сертифицируемым компаниям, держателям сертификатов, заинтересованным сторонам различные программы обучения. Подробную информацию можно найти <a href='https://ru.fsc.org/ru-ru/cert/study' target='_blank'>здесь</a>. Также на <a href='https://etraining.fsc.org/' target='_blank'>сайте</a> есть онлайн курсы на английском языке по товарным знакам, цепочке поставок и контролируемой древесине для аудиторов. В случае успешного прохождения онлайн курса участник получает сертификат, подтверждающий прохождение обучения.",
    2: "Региональных специалистов у нас нет, пишите или звоните в офис в Москве. Контакты размещены <a href='https://ru.fsc.org/ru-ru/o_nas/kontakty' target='_blank'>здесь</a>. Есть также представитель в Красноярске, к нему можно обращаться, если Вы проживаете в СФО или ДВФО."
}

const answersOnFourthCategory = {
    0: "Нет, орган по сертификации не может консультировать своего клиента. Консультацией и подготовкой компаний к сертификации занимаются консультанты. Перечень зарегистрированных FSC России консультантов размещен здесь.",
    1: "Лесной попечительский совет (Forest Stewardship Council®, FSC) — это международная некоммерческая неправительственная организация. У нее нет никакой ведущей страны или региона. FSC управляется членами, представляющими самые различные страны и регионы. Среди членов FSC есть также немало российских граждан и организаций.",
    2: "Нет, этого недостаточно. Нужно выполнить все требования Национального стандарта FSC. Сертификация FSC - это не только соответствие деятельности компании национальному законодательству, но и дополнительная социальная и экологическая ответственность, которая включает в себя: соблюдение прав местного населения и коренных народов, оценку социальных последствий своей деятельности, сохранение биоразнообразия и наиболее ценных в экологическом отношении лесов от рубок, и др. Помимо этого, стандарт включает и другие требования, например экономическую устойчивость, неистощительность лесопользования, сокращение отходов при лесозаготовках, мониторинг, и другие требования.",
    3: "Проверить наличие сертификата FSC у интересующей вас организации можно двумя способами:<br> a) В международной <a href='http://info.fsc.org' target='_blank'>базе данных<a>, указав наименование компании или номер сертификата.<br>b) Перечень Российских держателей сертификатов есть в формате pdf на <a href='https://ru.fsc.org/ru-ru/chto_my_delaem/facts_and_figures' target='_blank'>сайте</a>.",
    4: "Нет, для того чтобы наносить логотип FSC на свою продукцию, вам необходимо сертифицироваться по стандарту цепочки поставок COC. Это необходимо также для того, чтобы публично продвигать свою организацию как ответственную с помощью FSC.",
    5: "Зайдите на наш <a href='https://ru.fsc.org/ru-ru/cert/so' target='_blank'>сайт</a> и выберите орган по сертификации из предложенного списка аккредитованных компаний. Поскольку в России работает около 20 органов по сертификации, то имеет смысл провести тендер среди них.",
    6: "Да, можете - схема FSC является добровольной. Но большинство покупателей запрашивают подтверждение соответствия международным схемам лесной сертификации. Возможно, Вам придется искать другого покупателя, либо другие рынки сбыта."
}

// Инициализация массивов с категориями и ответами на вопросы
const arrayOfCategories = [categoryFirst, categorySecond, categoryThird, categoryFourth],
      arrayOfAnswers = [answersOnFirstCategory, answersOnSecondCategory, answersOnThirdCategory, answersOnFourthCategory];

// Обработчик события для кнопки показа категорий
buttonShow.addEventListener("click", () => {

    firstMessage.scrollIntoView({behavior: "smooth"});

});

// Обработка нажатия на пункты из блока с категориями
questionList.forEach((elem) => {

    elem.addEventListener("click", () => {

        let dateAndTime = new Date();

        // Создание клонов элементов для динамичного появления в любой момент
        let cloneOfUserAnswer = userAnswer.cloneNode(true),
            cloneOfUserMessage = userMessage.cloneNode(true),
            cloneOfDatePosition = datePosition.cloneNode(true);

        cloneOfDatePosition.textContent = formatDate(dateAndTime);
             
        cloneOfUserAnswer.appendChild(cloneOfUserMessage);
        cloneOfUserAnswer.appendChild(cloneOfDatePosition);    
        
        botContainer.appendChild(cloneOfUserAnswer);

        cloneOfUserMessage.textContent = elem.textContent;

        // Обработка показа нужных вопросов после нажатия на категорию
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

                cloneOfAnswers.id = elem.id;

                // Добавление элемента в конец чата и плавный переход к нему
                botContainer.appendChild(cloneOfAnswers);
                cloneOfAnswers.scrollIntoView({behavior: "smooth"});

                // Повторная выборка сообщений от бота с выбором вопросов
                questionListWithAnswers = document.querySelectorAll(".question-list");

            }

        });

        questionListWithAnswers.forEach((elemLi) => {

            let li = elemLi.querySelectorAll("li");
        
            li.forEach((liElem) => {
        
                liElem.addEventListener("click", () => {

                    countID = liElem.parentElement.id

                    let dateAndTime = new Date();
                    
                    // Создание клонов элементов для динамичного появления в любой момент
                    let cloneOfUserAnswer = userAnswer.cloneNode(true),
                        cloneOfUserMessage = userMessage.cloneNode(true),
                        cloneOfDatePosition = datePosition.cloneNode(true);

                    cloneOfDatePosition.textContent = formatDate(dateAndTime);
            
                    cloneOfUserAnswer.appendChild(cloneOfUserMessage);
                    cloneOfUserAnswer.appendChild(cloneOfDatePosition);     
        
                    botContainer.appendChild(cloneOfUserAnswer);

                    cloneOfUserMessage.textContent = liElem.textContent;

                    arrayOfAnswers.forEach((point) => {

                        if (arrayOfAnswers.indexOf(point) == countID) {

                            let dateAndTime = new Date();

                            // Создание клонов элементов для динамичного появления в любой момент
                            let cloneOfBotAnswer = botAnswer.cloneNode(true),
                                cloneOfBotMessage = botMessage.cloneNode(true),
                                cloneOfDatePosition = datePosition.cloneNode(true);

                            cloneOfDatePosition.textContent = formatDate(dateAndTime);    
                            
                            for (key in point) {

                                if (key == liElem.id) {

                                    cloneOfBotMessage.innerHTML = point[key];

                                    cloneOfBotAnswer.appendChild(cloneOfBotMessage);
                                    cloneOfBotAnswer.appendChild(cloneOfDatePosition)

                                    // Добавление элемента в конец чата и плавный переход к нему
                                    botContainer.appendChild(cloneOfBotAnswer);
                                    cloneOfBotAnswer.scrollIntoView({behavior: "smooth"});

                                }

                            }

                        }

                    });
        
                });
        
            });
        
        });

    });

});

// Обработчик события для кнопки сброса
buttonReset.addEventListener("click", () => {

    let children = document.querySelectorAll(".copy");

    children.forEach((elem) => {

        botContainer.removeChild(elem);

    });

    firstMessage.scrollIntoView({behavior: "smooth"});

});

/*if (elem.classList.contains("question-first")) {
    botMessage.classList.add("message");
    botMessage.classList.add("answer")
    botAnswer.appendChild(botMessage);

    botAnswer.classList.add("bot-message-green");
    botContainer.appendChild(botAnswer);

    botMessage.textContent = answerFirst;
}*/