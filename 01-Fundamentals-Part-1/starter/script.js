//let js = "amazing";
//if (js === "amazing") return console.log("js is fun");

/* let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof 2);
console.log(typeof false);
console.log(typeof "Luis");

jsIsFun = "Yes";
console.log(jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
 */

/* let age = 30;
age = 31;

const birthYear = 1990;

 */

/* const currentYear = 2037;
const ageLuis = currentYear - 1991;
const ageClaudia = currentYear - 2018;
console.log(ageLuis, ageClaudia);
console.log(ageLuis * 2, ageClaudia / 10, 2 ** 3);

const firstName = "Luis";
const lastName = "Salas";
console.log(`My name is ${firstName} and my lastname is ${lastName}`);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x); */

//Comparison Operators
//

/* Video -> 10 */

/* let then = new Date(2010, 0, 1);
let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.toString());
console.log(now.toUTCString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toISOString()); */

/* const now = 2037;
const ageLuis = now - 1987;
const ageClau = now - 2018;

console.log(ageLuis); */

/* Challenge 1 */
/* let MarksWeigths = 78;
let MarksHeight = 1.69;
let JohnWeigths = 92;
let JohnHeight = 1.95;

let MarksMBI = MarksWeigths / MarksHeight ** 2;
let JohnMBI = JohnWeigths / JohnHeight ** 2;
console.log(MarksMBI.toFixed(2));
console.log(JohnMBI.toFixed(2));

let markHigherMBI = MarksMBI > JohnMBI;
console.log(markHigherMBI);

function calculateMBI(mass, height) {
	let result = mass / height ** 2;
	return result.toFixed(2);
}

console.log(calculateMBI(78, 1.69)); */
/* 
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log("Gozde can start driving licence");
} else {
	const yearsLeft = 18 - age;
	console.log(`Gozde is too young, Wait another ${yearsLeft} years`);
}
 */

/* Challenge 2 */

/* let MarksWeigths = 78;
let MarksHeight = 1.69;
let JohnWeigths = 92;
let JohnHeight = 1.95;

let MarksMBI = (MarksWeigths / MarksHeight ** 2).toFixed(2);
let JohnMBI = (JohnWeigths / JohnHeight ** 2).toFixed(2);

if (MarksMBI > JohnMBI) {
	console.log(`Marks MBI (${MarksMBI}) is higher than John's (${JohnMBI})`);
} else {
	console.log(object);
}
 */

/* const inputYear = "1991";
const newInputYear = Number(inputYear);
console.log(inputYear, newInputYear);
console.log(newInputYear + 18);
console.log(String(23));

let n = 2 + 3 + 4;
let newN = n + "5";
console.log(typeof newN);
 */

/* 
Falsy values
false
0 
-0 
NAN 
""
null
Undefined
*/

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Luis"));
console.log(Boolean({}));
console.log(Boolean(NaN));
 */

/* const age = 18;

if (age === 18) {
	console.log("You just became an adult");
} */
/* 
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

shouldDrive
	? console.log("Sarah is able to drive")
	: console.log("someone else should drive");

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired); */

/* const day = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
];

let randonNum = Math.round(Math.random() * 5);

switch (day[randonNum]) {
	case "monday":
		console.log("Today is monday");
		break;
	case "tuesday":
		console.log("today is tuesday");
		break;
	case "wednesday":
	case "thursday":
		console.log("fuck day");
		break;
	case "friday":
		console.log("HOOKERS DAY");
		break;
	case "saturday":
		console.log("reading day");
		break;
	default:
		console.log("Enter a valid day");
} */

/* const age = 25;
const drinkAge =
	age >= 18 ? "I like to drink wine 🍷 " : "I like to drink milk 🥛 ";

console.log(drinkAge); */
