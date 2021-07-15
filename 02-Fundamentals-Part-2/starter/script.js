"use strict";

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
 */
//const interface = "Audio";
//const private = false;

/* ********************Functions*********************** */
/* function logger() {
	console.log("My name is Luis");
} */

//logger();

/* function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

console.log(fruitProcessor(2, 3)); */

/* function calcAge1(birthYear) {
	return 2037 - birthYear;
}

const age1 = calcAge1(1987);

const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calcAge2(1987);
console.log(age2); */

//Arrow function
/* const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1987);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1987, "Luis")); */

/* function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangesPieces = cutFruitPieces(oranges);

	const juice = `Juice made with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
	return juice;
}

console.log(fruitProcessor(2, 3));
 */

/* //01
const calcAverage = (n1, n2, n3) => {
	return (n1 + n2 + n3) / 3;
};

//02
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

//03
function checkWinner(avgDolhins, avgKoalas) {
	if (avgDolhins > avgKoalas) {
		console.log(`Dolhins wins (${avgDolhins} vs. ${avgKoalas})`);
	} else {
		console.log(`koalas wins (${avgKoalas} vs. ${avgDolhins})`);
	}
}
 */
//checkWinner(avgDolhins, avgKoalas);

/* const friends = ["Maria", "Milagros", "Gozde"];
const newLength = friends.push("Catherine");
friends.unshift("Paola");
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("Gozde"));
console.log(friends.includes("Milagros"));
 */

/* function calctip(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])]; */
//console.log(tips);

/* const luis = {
	firstName: "Fernando",
	lastName: "Salas",
	birthYear: 1987,
	age: 34,
	job: "porn actor",
	hobbies: ["sex", "ww2", "kebabs"],
	hasDriversLicense: true,
	calcAge: function () {
		return 2037 - this.birthYear;
	},
};
 */
//console.log(luis.calcAge());

/* const markMiller = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcIBM: function () {
		let BMI;
		BMI = this.mass / this.height ** 2;
		return BMI.toFixed(2);
	},
};

const johnSmith = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcIBM: function () {
		let BMI;
		BMI = this.mass / this.height ** 2;
		return BMI.toFixed(2);
	},
};

const markMillerIBM = markMiller.calcIBM();

const johnSmithIBM = johnSmith.calcIBM();

if (markMillerIBM > johnSmithIBM) {
	console.log(
		`Marks BMI (${markMiller.calcIBM()}) is higher than John (${johnSmith.calcIBM()})`
	);
} else {
	console.log(
		`Marks BMI (${johnSmith.calcIBM()}) is higher than John (${markMiller.calcIBM()})`
	);
}
 */

/* for (let i = 0; i < luis.length; i++) {
	if (typeof luis[i] !== "string") continue;
	console.log(luis[i]);
}
*/
/* for (let i = 0; i < luis.length; i++) {
	if (typeof luis[i] === "string") continue;
	console.log(luis[i]);
} */

/* const luis = [
	"Fernando",
	"Salas",
	1987,
	34,
	"porn actor",
	["sex", "ww2", "kebabs"],
];

for (let i = luis.length - 1; i >= 0; i--) {
	console.log(luis[i]);
} */

/* for (let i = 1; i <= 10; i++) {
	console.log(i);
} */

let i = 1;
while (i <= 10) {
	console.log(i);
	i++;
}
