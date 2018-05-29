var person = {
  Name: 'Rembert',
  LastName: 'Boom',
  Age: 22,
  length: '1.5',
  AgeAlternate: function (a,b) {
    return a * b ;
  },
}

console.log(`Hello, I am ${person.Name} and I am ${person.Age}, or ${person.AgeAlternate(person.Age,12)} months old or ${person.AgeAlternate(person.Age,365)} days old `)
