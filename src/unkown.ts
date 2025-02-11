let unkownValue: unknown;

unkownValue = "hello world";
unkownValue = [1, 2, 3];
unkownValue = 42.33455;

if (typeof unkownValue === "number") {
  unkownValue.toFixed(2);
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else if (typeof error === "string") {
    console.log(error);
  }
}
