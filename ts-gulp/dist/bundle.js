(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "hello from " + name;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function showHello(divName, name) {
    var ele = document.getElementById(divName);
    ele.innerText = greet_1.sayHello(name);
}
showHello("greeting", "test");

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8uNi4wLjJAYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL2dyZWV0LnRzIiwic3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLGtCQUF5QixJQUFZO0lBQ25DLE1BQU0sQ0FBQyxnQkFBYyxJQUFNLENBQUE7QUFDN0IsQ0FBQztBQUZELDRCQUVDOzs7OztBQ0ZELGlDQUFtQztBQUVuQyxtQkFBb0IsT0FBZSxFQUFFLElBQVk7SUFDakQsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QyxHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDOUIsQ0FBQztBQUVELFNBQVMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gYGhlbGxvIGZyb20gJHtuYW1lfWBcbn0iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gJy4vZ3JlZXQnO1xuXG5mdW5jdGlvbiBzaG93SGVsbG8gKGRpdk5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG5jb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKVxuZWxlLmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpXG59XG5cbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsIFwidGVzdFwiKSJdfQ==
