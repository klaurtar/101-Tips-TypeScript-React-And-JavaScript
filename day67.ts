const emptyString = '';
console.log(!!emptyString); // false

const myString = 'I enjoy green beans';
console.log(!!myString); // true

const classMates = ['John', 'Susie', 'Tara', 'Ryan'];

if (!!classMates.length) {
  console.log('!!classMates.length === true'); // This will run!
}

const favoriteThingsAboutJava = [];

if (!!favoriteThingsAboutJava.length) {
  console.log('I love Java!'); // This will NEVER run
}

console.log(!!0); // false
console.log(!!25); // true
