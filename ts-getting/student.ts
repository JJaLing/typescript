class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName){
    this.fullName = firstName + middleInitial + lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'hello' + person.firstName + person.lastName
}

var user = new Student('jane', 'hk', 'cn')

document.body.innerHTML = greeter(user)