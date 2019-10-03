let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD")
let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");


var appData = {
	budjet: money,
	timeData: time,
	expenses:{
		a : b
	},
	optionalExpenses:{},
	income:[],
	savings: false
};

alert(money / 30);

console.log(appData);