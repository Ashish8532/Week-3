// Person Interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// function introduce take Person as paramenter
// print message in given format.
function introduce(person: Person)
{
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`);
}

// Here I am passing lastname as number but it should be a string.
// And It gives the compile time error that lastname is not assignable to 
// parameter of type Person as the lastname type is string.

let myObj = { firstName: "Ashish", lastName: 12};

introduce(myObj);