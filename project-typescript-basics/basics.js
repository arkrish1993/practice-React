// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Primitives
var age;
age = 12;
var userName;
userName = "Max";
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ["Sports", "Cooking"];
var person;
person = {
    name: "Max",
    age: 32
};
// person = {
//   isEmployee: true
// };
var people;
// Type inference
var stringVal = "test";
// stringVal = 12345;
//Union Types
var course = "React - The Complete Guide";
course = 12341;
// Functions & types
//function add(a: number, b: number): number
function add(a, b) {
    return a + b;
}
//function printVal(value: any): void
function printVal(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
var stringArray = insertAtBeginning(["a", "b", "c"], "d");
// updatedArray[0].split('');
stringArray[0].split("");
