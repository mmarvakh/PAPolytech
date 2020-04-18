<?php

if ($_POST["back"]) {
    header("Location: admin.php");
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
    <section class="container text-center" style="margin-top: 10%">
        <h1>Пост был успешно отправлен!</h1>
    </section>
    <form method="POST" class="text-center" style="margin-top: 5%">
        <input name="back" type="submit" value="Вернуться в админку">
    </form>
</body>
</html>