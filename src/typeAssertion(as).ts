let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

console.log(strLength);

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

//save Status.Pending in the DB as a string
//retrieve string from the DB

//Solution 1:
const statusValue = "Pending";

const user: User = { name: "john", status: Status[statusValue] };

//or Solution 2:
const statusValue2 = "Pending";

const user2: User = { name: "john", status: statusValue2 as Status };
