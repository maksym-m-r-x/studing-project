function myFunc (element) {
	location.replace ('log-in.html');
}

let count = 0;
let one_false = document.getElementById("1-false");
let one_true = document.getElementById("1-true");
let two_false = document.getElementById("2-false");


let two_true = document.getElementById("2-true");
let three_false = document.getElementById("3-false");
let four_false = document.getElementById("4-false");


let five_false = document.getElementById("5-false");
let six_false = document.getElementById("6-false");
let three_true = document.getElementById("3-true");


let five_true = document.getElementById("5-true");
let four_true = document.getElementById("4-true");
let seven_false = document.getElementById("7-false");


let six_true = document.getElementById("6-true");
let eight_false = document.getElementById("8-false");
let nine_false = document.getElementById("9-false");


// && - Логическое И
// || = Логическое ИЛИ

function checked_html_tests(){
// В данном случае должны выполнится ВСЕ логические условия
//first  
if (one_false.checked == false && one_true.checked == true && two_false.checked == false) {
	count++;
	document.getElementById('first_status').textContent = "1. Первый вопрос верен";
} else {
	document.getElementById('first_status').textContent = "1. Первый вопрос не верен";
}

//second
if (three_false.checked == false && two_true.checked == true && four_false.checked == false) {
	count++;
	document.getElementById('second_status').textContent = "2. Второй вопрос верен";
} else {
	document.getElementById('second_status').textContent = "2. Второй вопрос не верен";
}

//third
if (five_false.checked == false && three_true.checked == true && six_false.checked == false) {
	count++; 
	document.getElementById('third_status').textContent = "3. Третий вопрос верен";
} else {
	document.getElementById('third_status').textContent = "3. Третий вопрос не верен";
} 

//fourth
if (seven_false.checked == false && (four_true.checked == true || five_true.checked == true)) {
	count++;
	document.getElementById('fourth_status').textContent = "4. Четвертий вопрос верен";
} else {
	document.getElementById('fourth_status').textContent = "4. Четвертий вопрос не верен";
} 
 

//fifth
if (eight_false.checked == false && six_true.checked == true && nine_false.checked == false) {
	count++;
	document.getElementById('fifth_status').textContent = "5. Пятый вопрос верен";
} else {
	document.getElementById('fifth_status').textContent = "5. Пятый вопрос не верен";
} 
 
document.getElementById("res").textContent="ваш счет "+ count;
}
