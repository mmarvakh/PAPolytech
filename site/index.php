<?php

$host = "localhost";
$db = "fscProject";
$username = "root";
$password = "M8112001m";
$charset = "utf8";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$connection = new PDO($dsn, $username, $password);

$postsData =$connection->query("SELECT * FROM posts");

?>


<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/68084d886f.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>FAQ - о проекте</title>
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top" id="navbar">
        <div class="container navbar-inside"><h3 style="color: #fff;">FAQ 191-361</h3><button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive"><span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> <a href="#our-last-actions" class="nav-link active">Блог</a> </li>
                    <li class="nav-item"> <a href="#about-project" class="nav-link">О проекте</a> </li>
                    <li class="nav-item"> <a href="#about-team" class="nav-link">Команда</a> </li>
                    <li class="nav-item"> <a href="#links" class="nav-link">Материалы</a> </li>
                </ul>
            </div>
        </div>
    </nav>
    <script>
        let linksList = document.querySelector(".navbar-nav"),
            links = linksList.querySelectorAll("ul>li");

            links.forEach((elem) => {

                elem.classList.remove("active");

                elem.addEventListener("click", (event) => {
                    event.preventDefault();
                    const elemId = elem.querySelector("a");

                    const elemIdHref = elemId.getAttribute("href").slice(1);
                    const blockId = document.getElementById(`${elemIdHref}`);

                    blockId.scrollIntoView({behavior: "smooth"});
                });
            });
    </script>
    <section class="container padding" id="our-last-actions">
        <h2>Наши последние действия:</h2>
        <!--Начало блока со статьёй-->
        <div class="cards-in-blog">
            <p><i class="fas fa-user" style="padding-right: 0.2%;"></i>
                Ермолин Алексей, 23.03.2020, 20:47:00
            </p>
            <h3>
                Создали сайт-лендинг проекта
            </h3>
            <span>
                Доброго времени суток! Наконец лендинг-сайт заработал, а это означает, что наконец-то мы можем делиться с вами новостями с полей разработки. Поэтому закончим на приветствии и сразу перейдем к делу. <br><br>
                Если у вас был доступ к нашему git репозиторию, то вы, безусловно, знаете, что написанный прототип на java уже доработан и работает именно так, как мы хотели. Наши программисты восхищаются своими навыками и морально готовятся к разработке андроид – приложения.
                Сайт, на котором вы читаете данную статью, прошел тернистый путь к своему созданию, однако, как вы видите, текущая версия создана без помощи WordPress и других помощников, облегчающих жизнь. Хоть дедлайн подошел и незаметно, прототип и большой опыт помогли Марку за 2 часа воссоздать сие чудо инженерии. Слава КИСам-веберам! <br><br>
                В эту среду состоялась еще одна встреча с представителями FSC на платформе Discord. В ходе обсуждения был согласован дизайн сайта и предоставлены вопросы, которые нужно будет добавить в наш проект. Лучшие (то есть все) умы нашей группы уже думают о том, как разделить их на сегменты наилучшим образом. Мы будем держать вас в курсе событий. <br><br>
                А еще мы сделали ТЗ и его приняли, но на него и так потрачено много букв, поэтому не будет тратить их на эту тему впредь.
                Это все новости к текущему часу. Спасибо за внимание, хорошего дня и не болейте!
            </span>
            <hr>
        </div>
        <!--Конец блока со статьёй-->
    </section>
    <section class="container padding" id="about-project">
        <h2>О проекте</h2>
        <p class="about-project">
            Заказчиком данного проекта является компания
            FSC (Лесной попечительский совет) – <br> это международная некоммерческая организация в форме ассоциации, которая состоит из представителей экологических и социальных организаций, продавцов лесоматериалов, лесничих, коренных малочисленных народов, лесных корпораций, сертификационных организаций из многих стран мира, в том числе и из России. Члены ЛПС могут состоять в экологической, экономической и социальной палатах. Для системы управления ЛПС характерны равный вес в принятии решений каждой из указанных палат, демократичность и равенство. <br><br>
            Одним из наиболее важных пунктов работы компании FSC является взаимодействие с клиентами и заинтересованными лицами: компаниями, лесниками, жителями районов, в которых проводится вырубка лесов. Для облегчения работы операторов, отвечающих на вопросы, поступающие в компанию, было предложено разработать сайт, содержащий ответы на наиболее популярные и часто задаваемые вопросы. <br><br>
            Результатом проекта является сайт, созданный в корпоративных цветах, имеющий удобную систему навигации по вопросам и ответы на все частые вопросы.
            Список вопросов и ответов формулируется компанией FSC, компания-разработчик отвечает исключительно за техническую составляющую сайта.
        </p>
    </section>
    <section class="container padding" id="about-team">
        <h2>Члены команды</h2>
        <h3 style="margin: 2% 0;">Список участников:</h3>
        <ul>
            <li><span>Марвах Марк, </span>группа 191-361</li>
            <li><span>Смирнов Егор,</span> группа 191-361</li>
            <li><span>Ермолин Алексей,</span> группа 191-361</li>
            <li><span>Гладышев Андрей,</span> группа 191-361</li>
            <li><span>Алексеев Егор,</span> группа 191-361</li>
            <li><span>Стефанова Дарья,</span> группа 191-361</li>
            <li><span>Базавлюк Ольга,</span> группа 191-361</li>
            <li><span>Афанасьев Кирилл,</span> группа 191-361</li>
        </ul>
    </section>
    <section class="container padding" id="links">
        <h2>Ссылки на все материалы</h2>
        <p class="link">Ссылка на Git репозиторий на GitHub - <a href="https://github.com/mmarvakh/PAPolytech/tree/master" target="_blank">КЛИК</a></p>
        <p class="link">Ссылка на доску команды в Trello - <a href="https://trello.com/b/cOZl70tJ/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-fsc" target="_blank">КЛИК</a></p>
    </section>
    <footer class="padding">
        <p>&copy; Команда Московского Политехнического Университета, группа 191-361</p>
    </footer>
</body>
</html>