// Задание 1

/*let a = 1;
let b = 2;
let c = 3;
let max = null;

if (a > b) {
	max = a;
}
else {
	max = b;
}
if (max < c) {
	max = c;
}
console.log(max);

// Задание 2
let t = 35;
if (t < -30) {
	console.log("Оставайтесь дома!");
}
else if (t >= -30 && t <= -10) {
	console.log("Сегодня холодно!");
}
else if (t >= -9 && t <= 5) {
	console.log("Не холодно!");
}
else if (t >= 6 && t <= 15) {
	console.log("Тепло!");
}
else if (t >= 16 && t <= 25) {
	console.log("Очень тепло!");
}
else if (t >= 26 && t < 35) {
	console.log("Жарко!");
}
else {
	console.log("Пекло!");
}

// Задание 3
let userName = "user";
switch (userName) {
	case "admin":
		alert("Добро пожаловать! Вы администратор!");
	break
	case "user":
		alert("Добро пожаловать! Вы пользователь!");
	break
	case "manager":
		alert("Добро пожаловать! Вы менеджер!");
	break
	case "bot":
		alert("В доступе отказано! Вы бот!");
	break
	default:
		alert("Мы с Вами не знакомы!");
	break;
}


// Задание 4
let logicOne = null || 0 || "" || undefined;
console.log(logicOne); // Выведет undefined, как последнее ложное значение

let logicTwo = "яблоко" && true && null && 1;
console.log(logicTwo); // Выведет null, как первое ложное значение

let logicThree = 0 || true && "false" || null;
console.log(logicThree); // Выведет строку "false", т. к. приоритет оператора && выше. Он выполнится первым
// и сравнит true и "false", вернув последнее истинное "false". Это значение будет первым истинным при 
//сравнение || и именно оно вернётся 

let logicFour = 0 && true || "false" && null;
console.log(logicFour); // Влевой части вернётся первое ложное - 0, в правой первое ложное - null.  
// 0 || null вернёт последнее ложное - null

let logicFive = !0 && !!1;
console.log(logicFive); // 0 - fasle, !0 - true. !1 - false, !!1 - true. true && true  - вернёт последнее true.

let logicSix = !(null || !"апельсин" && true);
console.log(logicSix); // Pначение !"апельсин" - это false. false && true - вернёт false. 
// null || false - вернёт false. !false = true. Вернётся true.
*/
// Задание 5
let myString = "Эту строку надо выводить";
let n = 15;
let i = 0;

while (i < n) {
	i++;
	console.log(myString);
}

for (let i = 0; i < n; i++) {
	console.log(myString);
}

// Задание 6

// Задание 7