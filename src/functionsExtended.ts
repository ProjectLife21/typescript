function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

function sum(message: string, ...numbers: number[]) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return `${message} ${sum}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);
console.log(result);

function logMessage(message: string): void {
  console.log(message);
  //   return "Hello world!";
}

logMessage("Hello, Typescript");

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase());
  }
}

processInput(10);
processInput("Hello");

interface IStudent {
  id: number;
  name: string;
}

function createStudent(student: IStudent): void {
  console.log(`Welcome to the course ${student.name.toUpperCase}`);
}

const newStudent: IStudent = {
  id: 5,
  name: "Anna",
};

createStudent(newStudent);

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  }

  return config.reverse
    ? input.toUpperCase()
    : input.split("").reverse().join("").toUpperCase();
}

const result1 = processData(10);
console.log(result1);

const result2 = processData("hello", { reverse: true });
console.log(result2);

const result3 = processData("hello");
console.log(result3);
