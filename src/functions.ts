const names: string[] = ["Tom", "John", "Anna"];

const searchedWord = checkIfNameExists("anna", names);
console.log(searchedWord);

function checkIfNameExists(searchedName: string, arr: string[]) {
  if (!arr || arr.length <= 0) {
    return;
  }

  let searchedNameInLowerCase = searchedName.toLowerCase();

  for (let item of arr) {
    let itemInLowerCase = item.toLowerCase();

    if (searchedNameInLowerCase === itemInLowerCase) return true;
  }

  return false;
}
