type TCar = {
  brand: string;
  year: number;
};

let car: TCar = { brand: "toyota", year: 2020 };

car.brand = "ford";
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: "audi", year: 2022 };
console.log(car1);

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

interface ItemsI {
  readonly title: string;
  cost?: number;
}

let items: ItemsI[] = [book, pen, notebook];

for (let item of items) {
  console.log(item);
}

// items[0].title = "new book";
