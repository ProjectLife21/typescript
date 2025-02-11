export let tax: number | string = 10;
tax = 100;
tax = "$10";

console.log(tax);

type TRequestStatus = "pending" | "success" | "error";

let requestStatus: TRequestStatus = "pending";
requestStatus = "error";
console.log(requestStatus);

const books = ["1984", "Brave New World", "Pan Tadeusz"];

// let foundBook: string = "";
let foundBook: string | undefined;

for (let book of books) {
  if (book === "Pan Tadeusz") {
    foundBook = book;
    foundBook.length;
    break;
  }
}

console.log("Found book is " + foundBook);
console.log("Book length is " + foundBook?.length);

let discount: "discount" | "full" = "full";
// discount = true;
