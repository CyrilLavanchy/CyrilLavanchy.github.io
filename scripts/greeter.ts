var myHeading = document.querySelector('h1');

class User {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + "" + middleInitial + "" + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Herzlich Willkommen auf NFL Analytics, " + person.firstName + "" + person.lastName;
}

let user = new User("Cyril", "D.", "Lavanchy");
