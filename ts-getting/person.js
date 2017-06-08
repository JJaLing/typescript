function greeter(person) {
    return 'hello' + person.firstName + person.lastName;
}
var user = {
    firstName: 'jane'
};
document.body.innerHTML = greeter(user);
