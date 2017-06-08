interface Person {
  firstName: string;
  lastName: string;
}

function greeter (person: Person) {
  return 'hello' + person.firstName + person.lastName;
}

var user = {
  firstName: 'jane',
  lastName: 'kk'
}

document.body.innerHTML = greeter(user)