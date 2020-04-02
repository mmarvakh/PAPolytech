<?php

// Начало сессии и проверка на наличие корректного логина и пароля, если они отсутствуют, то произойдёт перенаправление на страницу авторизации
session_start();

if (!$_SESSION['login'] || !$_SESSION['password']) {
    header("Location: login.php");
    die();
}

// При нажатии на кнопку выхода из панели администратора пользователь будет перенаправлен на страницу авторизации
if ($_POST["logOut"]) {
    session_destroy();
    header("Location: login.php");
}
// Объявление переменных и внесение в них данных для подключения к СУБД
$host = "localhost";
$db = "fscProject";
$username = "root";
$password = "M8112001m";
$charset = "utf8";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$connection = new PDO($dsn, $username, $password);

// Выборка данных из БД
$loginData = $connection->query("SELECT * FROM team");
$postsData = $connection->query("SELECT * FROM posts");
$currentUserLogin = $_SESSION["login"];
$currentUserName = $connection->query("SELECT * FROM team WHERE login='$currentUserLogin'");
$currentUserName = $currentUserName->fetch();

if ($_POST["postMessage"]) {
    $postBody = $_POST["postMessage"];
    $postTitle = $_POST["title"];
    $newPost = $connection->query("INSERT INTO posts (date, authorsLogin, postMessage, title) VALUES (current_time(), '$currentUserLogin', '$postBody', '$postTitle')");
    header("Location: success.php");
}

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/68084d886f.js"></script>
    <link rel="stylesheet" href="../css/style.css">
    <title>Панель администратора</title>
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top" id="navbar">
        <div class="container navbar-inside"><h3 style="color: #fff;">Панель администратора</h3><button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive"><span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> <a href="http://marvakh.ru/" class="nav-link active" target="_blank">На главную</a> </li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="container">
        <h2 class="current-user">
            Текущий пользователь: <span class="authorName"><?= $currentUserName["name"] ?></span>
        </h2>
    </section>
    <section class="container text-left admin-form" id="login-form" style="margin-top: 2%">
        <h3>Добавить статью на сайт:</h3>
        <form method="POST">
            <div class="theme-of-message">
                <p>Тема сообщения:</p>
                <input name="title" type="text" required>
            </div>
            <div class="message">
                <p>Сообщение:</p>
                <textarea name="postMessage" id="" cols="30" rows="10" required></textarea>
            </div>
            <div class="text-right">
                <input type="submit" value="Запостить статью">
            </div>
        </form>
    </section>
    <section class="container text-center" style="margin-top: 10%">
        <form method="POST">
            <input name="logOut" type="submit" value="Выйти из системы">
        </form>
    </section>
</body>
</html>