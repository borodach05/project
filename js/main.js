'use strict'

let money = prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD');


let appDate = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: []
}

let use = prompt('Введите обязательную статью расходов в этом месяце'),
	willCost = prompt('Во сколько обойдется'),
	use2 = prompt('Введите обязательную статью расходов в этом месяце'),
	willCost2 = prompt('Во сколько обойдется');

appDate.expenses.use = use2;
appDate.expenses.willCost = willCost2;

alert(appDate.budget / 30);







/*'use strict';


a = 5;

var number = 5;
var string = 'Hello!';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('strinf'*0);

let something;
console.log(something);

let persone = {
	name: 'John',
	age: 25,
	ismerries: false
};


console.log(a);


console.log(persone.name);
console.log(persone['name']);


let arr = ['plum.png','orange.jpg','apple.png'];

console.log(arr[0]);

//alert('Hello World!');

let answer = confirm('ТЫ был там ?');

console.log(answer);

//let answer = +prompt('ТЫ был там ?', 'Да');

/*console.log(typeof(answer));

console.log('arr' + '- object');
console.log(4 + '- object');*/


// let incr = 10,
// 	decr = 10;

// // incr++;
// // decr--;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);
// console.log('2' == 2);

// let isChecked = true,
// 	isClose = false;

// console.log(isChecked || isClose);
// console.log(isChecked && isClose);
// // Восклицательный обращает в обратное
// console.log(isChecked && !isClose);*/