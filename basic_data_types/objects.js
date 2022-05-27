let person={
firstName:'Muhammad',
lastName:'Hassan',
//gender:'male'
}

console.log(person.lastName)
console.log(person['lastName'])
person.firstName='Mariyum'
console.log(person.firstName)
person.gender='female'
console.log(person)
//console.log(firstName in person)
//delete person.gender
console.log(person)

//console.log(gender in person)

for(let key in person)
console.log(person[key])