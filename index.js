function cashOut(money) {

if (typeof money !== "number") {

return "Invalid";

}

if (money !== Math.abs(money)) {

return "Invalid";

} else {

return (money * 1.75) / 100;

}

}

function validEmail(email) {

if (typeof email === "string") {

if (

[".", "-", "_", "+", "@"].indexOf(email.charAt(0)) > -1 ||

email.includes(" ") ||

email.slice(-4) !== ".com" ||

!email.includes("@")

) {

return false;

} else {

return true;

}

} else {

return "Invalid";

}

}

function electionResult(votes) {

if (Array.isArray(votes)) {

let mango_count = votes.filter((value) => value === "mango").length;

let banana_count = votes.filter((value) => value === "banana").length;

if (mango_count === banana_count) {

return "Draw";

} else if (mango_count > banana_count) {

return "Mango";

} else if (banana_count > mango_count) {

return "Banana";

}

} else {

return "Invalid";

}

}

function isBestFriend(f1, f2) {

if (

typeof f1 === "object" &&

!Array.isArray(f1) &&

typeof f2 === "object" &&

!Array.isArray(f2)

) {

if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {

return true;

} else {

return false;

}

} else {

return "Invalid";

}

}

function calculateWatchTime(times) {

let totalSeconds = 0;

function arrayChecker(time) {

return typeof time === "number";

}

if (times.every(arrayChecker)) {

for (let time of times) {

totalSeconds = totalSeconds + time;

}

let hours = Math.floor(totalSeconds / 3600);

totalSeconds %= 3600;

let minutes = Math.floor(totalSeconds / 60);

let seconds = totalSeconds % 60;

let myobj = { hour: hours, minute: minutes, second: seconds };

return myobj;

} else {

return "Invalid";

}

}