interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "author",
  // pages: 123
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${message} + ${this.title}`;
  },
};

// deepWork.isbn = 'random value';

interface Person {
  readonly id: number;
  name: string;
  age: number;
}

interface Employee extends Person {
  department: string;
}

interface Manager extends Person {
  employees: Employee[];
}

type Staff = Employee | Manager;

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(num: number): number;
}

const laptop: Computer = {
  id: 1,
  brand: "random brand",
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

laptop.storage = 256;
laptop.upgradeRam(4);
console.log(laptop.ram);

console.log(laptop);

interface SomePerson {
  name: string;
}

interface DogOwner extends SomePerson {
  dogName: string;
}

interface Manager extends SomePerson {
  managePeople(): void;
  delegateTask(): void;
}

function getEmployee(): SomePerson | DogOwner | Manager {
  const num = Number(Math.random().toFixed(2));

  if (num < 0.33) {
    return { name: "Tom" };
  } else if (num < 0.66) {
    return { name: "John", dogName: "Pikachu" };
  } else {
    return {
      name: "Adam",
      delegateTask() {
        console.log("Delegate Tasks");
      },
      managePeople() {
        console.log("Manage people");
      },
    };
  }
}

const employe = getEmployee();
console.log(employe);

function isManager(obj: SomePerson | DogOwner | Manager): obj is Manager {
  return "managePeople" in obj;
}

if (isManager(employe)) {
  employe.delegateTask();
}
