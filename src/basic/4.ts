

function showMessage(message: string): void {
  console.log(message);
}
showMessage("Hello, world!");
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log(calc(3, 6));
function customError(): never {
  throw new Error("Error");
}

// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
