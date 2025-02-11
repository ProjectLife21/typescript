type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: "John",
  isActive: true,
};

const susan: User = {
  id: 2,
  name: "Susan",
  isActive: false,
};

function createUser(user: User): string {
  return `User: ${user.id} ${user.name}  is active: ${user.isActive}`;
}

const johnUser = createUser(john);
console.log(johnUser);

type Theme = "dark" | "light";

let theme: Theme;

theme = "dark";
theme = "light";

function setTheme(theme: Theme) {
  theme = theme;
}

setTheme("dark");

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      "Person is Manager. He has " + staff.employees.length + " employees"
    );
  } else {
    console.log(
      "Person is employe work in " + staff.department + " department"
    );
  }
}

const tom: Employee = {
  id: 1,
  department: "Devs",
  name: "tom",
};

const ewa: Manager = {
  id: 2,
  name: "Susan",
  employees: [tom],
};

printStaffDetails(tom);
printStaffDetails(ewa);

type Book = { id: number; name: string; price: number };

const book1: Book = {
  id: 1,
  name: "how to cook a dragon",
  price: 15,
};

const book2: Book = {
  id: 2,
  name: "the secret life of unicorns",
  price: 18,
};

const discountedBook: Book & { discount: number } = {
  id: 3,
  name: "Gnomes vs Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};

// OR
type DiscountedBook = Book & { discount: number };

const discountedBook2: DiscountedBook = {
  id: 3,
  name: "Gnomes vs Goblins: The Ultimate Guide",
  price: 25,
  discount: 0.15,
};
