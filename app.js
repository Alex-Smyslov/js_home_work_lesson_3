let age = "dfcff";
age = +age;
if (!isNaN(age)) {
	if (age === null) {
		console.log("Некорректный возраст!");
	}
}	else {
	console.log("Некорректный возраст!");
}



if(age) {
		if (age > 18) {
		console.log("Добро пожаловать!");
	}	else if (age === 18) {
		console.log("Поздравляем с совершеннолетием!");
	}	else {
		console.log("Вы ещё слишком малы!");
	}
} else {
	console.log("Укажите Ваш возраст!");
}

let gender = "Чен";
if (gender.toLocaleLowerCase() === "муж") {
	console.log("Вам налево");
}	else if (gender.toLocaleLowerCase() === "жен") {
	console.log("Вам направо");
}	else {
	console.log("Вам в Европу!!!!!!");
}




// let isUser = false;
// let typeUser = isUser ? "Пользователь" : "Бот" ;
// console.log("Добро пожаловать" + typeUser);

let typeUser = "admin"; //user, guest, bot
switch (typeUser) {
	case "admin":
		console.log("Вы admin!");
	break;
	case "user":
		console.log("Вы user!");
	break;
	case "guest":
		console.log("Вы guest!");
	break;
	case "bot":
		console.log("Вы bot!");
	break;
	default:
		console.log("Мы вас не знаем!");
	break;
}
let i = 0;
const lastNumber = 20;
let resultStrig = '';
while (++i<=lastNumber) {
	resultStrig += `${i}${i !== lastNumber ? ', ' : ''}`;
}
console.log(resultStrig);

let j = 20;
let resultStrig2 = '';
while (j>=0) {
	resultStrig2 += `${j}${j !== 0 ? ', ' : ''}`;
	j--;
}
console.log(resultStrig2);

// for (let k=1; k<=10; k++) {
// 	console.log(k);
// }