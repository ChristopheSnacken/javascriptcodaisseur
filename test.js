
let languageName = "Javascript"
let nameMine = "Christophe"
let ageMine = 36
console.log (`${nameMine} ${ageMine*12}`)

var answerTemp = prompt("What is the temperature")
if (answerTemp<5) {
  document.write ("Parka weather")
}
else if (answerTemp>4 && answerTemp<18) {
  document.write ("Jacket weather")
}
else {
  document.write ("T-shirt weather")
}
document.write("\n")
var answerNum = prompt("choose a random number")
answerNum %2 == 0  ? document.write(" BTW You choose an even number") : document.write(" BTW You choose an odd number")

document.write("\n")
let answerLang = prompt("What is your favorite language?")
let kindness = answerLang.valueOf()
if (kindness = "javascript"  ) {
  document.write(`I love Javascript`);
}
else if (kindness = "php") {
  document.write (`I kinda not love PHP`);
}
else {
  document.write (`Sorry, I mostly like JavaScript!`);
}
