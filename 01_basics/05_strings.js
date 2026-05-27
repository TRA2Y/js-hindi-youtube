const name = "paggo"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String ('paggo-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    paggo   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:// paggo.com/paggo%20shubham"

console.log( url.replace('%20', '-'))
console.log( url.includes('sunder'))


console.log(gameName.split('-'));




