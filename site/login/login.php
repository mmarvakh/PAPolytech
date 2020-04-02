<?php

session_start();
ini_set("session.gc.maxlifetime", 3600);

$host = "localhost";
$db = "fscProject";
$username = "root";
$password = "M8112001m";
$charset = "utf8";

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$connection = new PDO($dsn, $username, $password);

$loginData = $connection->query("SELECT * FROM team");

if ($_POST["login"]) {
    foreach ($loginData as $login) {
        if ($_POST["login"] == $login["login"] && $_POST["password"] == $login["password"]) {
            $_SESSION["login"] = $_POST["login"];
            $_SESSION["password"] = $_POST["password"];
            header("Location: admin.php");
        }
    }
    echo "<div class='error'>Неверный логин или пароль!</div>";
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
    <title>Вход в панель администратора</title>
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top" id="navbar">
        <div class="container navbar-inside"><h3 style="color: #fff;">FAQ 191-361</h3><button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive"><span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> <a href="http://marvakh.ru/" class="nav-link active">На главную</a> </li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="container text-left login-form" id="login-form">
        <form method="POST">
            <p>Логин:</p>
            <input name="login" type="text" required>
            <p>Пароль:</p>
            <input name="password" type="password" required>
            <br><br>
            <input type="submit" value="Авторизоваться">
        </form>
    </section>
</body>
</html>