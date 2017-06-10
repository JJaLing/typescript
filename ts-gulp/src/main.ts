import { sayHello } from './greet';

function showHello (divName: string, name: string) {
const ele = document.getElementById(divName)
ele.innerText = sayHello(name)
}

showHello("greeting", "test")