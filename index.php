<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
		<script src="script.js"></script>
    </head>
    <body>
        <div class="head-div" id="topmenu">
            <div class="name">
                <img class="photo" src="materials/virus.png">
                <p class="name-of"><b>НАЗВАНИЕ САЙТА</b></p>
            </div>
            <div id="container">
			  <button class="learn-more" id="login">
				<div class="circle">
				  <span class="icon arrow"></span>
				</div>
				<p class="button-text" onclick="myFunc(this)">Войти</p>
			  </button>
			</div>
            <div id="container">
			  <button class="learn-more" id="reg">
				<div class="circle">
				  <span class="icon arrow"></span>
				</div>
				<p class="button-text">Зарегистрироватся</p>
			  </button>
			</div>
            <div id="container">
			  <button class="learn-more">
				<div class="circle">
				  <span class="icon arrow"></span>
				</div>
				<p class="button-text">Тесты/практика</p>
			  </button>
			</div>
            <div id="container" class="mono">
			  <button class="learn-more">
				<div class="circle">
				  <span class="icon arrow"></span>
				</div>
				<p class="button-text">видео-обучение</p>
			  </button>
			</div>
        </div>
    </body>
</html>