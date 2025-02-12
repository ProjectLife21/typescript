import newStudent, { person, sayHello, type Student } from "./modules";

sayHello("TypeScript");
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: "bob",
  age: 24,
};

console.log(anotherStudent);
