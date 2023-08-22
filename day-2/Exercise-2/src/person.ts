// Interface person
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// function introduce will take Person as parameter
// and print message in given format with person's properties.
function introduce(person: Person)
{
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`);
}

let myObj = { firstName: "Ashish", lastName: "Kumar", age: 21 };
introduce(myObj);