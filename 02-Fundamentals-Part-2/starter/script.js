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

const friends = ["Maria", "Milagros", "Isabel"];
const years = new Array(1945, 1939, 1969, 1987, 1991);

console.log(friends.length);
console.log(years.length);
console.log(friends[friends.length - 1]);
