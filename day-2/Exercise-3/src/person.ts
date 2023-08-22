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


// Resolve all bug using VSCode debugger.
let myObj = { firstName: "Ashish", lastName: "Kumar", age: 21 };
introduce(myObj);