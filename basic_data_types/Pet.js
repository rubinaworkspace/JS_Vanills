const Person= require('./Person')
class Pet extends Person{

    get Location(){return "BlueCross"}
    constructor(firstName, lastName)
    {
        super(firstName, lastName)
    }
}

let pet= new Pet("timmy","jimmy")

