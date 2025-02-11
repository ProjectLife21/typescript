// DOM elements
const appRootDOM = getElement("#app");
appRootDOM.textContent = `Hello TS!`;

// Functions
function getElement(selector: string) {
  if (!selector) {
    throw new Error(`Provide selector name!`);
  }

  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`No such element with selector: ${selector}`);
  }

  return element;
}

function getElements(selector: string) {
  if (!selector) {
    throw new Error(`Provide selector name!`);
  }

  const elements = [...document.querySelectorAll(selector)];

  if (!elements || elements.length <= 0) {
    throw new Error(`No such elements with selector: ${selector}`);
  }

  return elements;
}
