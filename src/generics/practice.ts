// GENERICS

// ЗАДАЧА 1
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}
const numberArray = [10, 20, 30];
const stringArray = ["hello", "world", "typescript"];
const objectArray = [{ name: "Alice" }, { name: "Bob" }];

console.log(getFirstElement(numberArray));
console.log(getFirstElement(stringArray));
console.log(getFirstElement(objectArray));
// numberArray;
// function getFirstElement<T>(array: number[]): number {
//   return array[0];
// }

// stringArray;
// function getFirstElement<T>(array: string[]): string {
//   return array[0];
// }

// // objectArray;
// function getFirstElement<T>(array: { name: string }[]): { name: string } {
//   return array[0];
// }

// ЗАДАЧА 2 (Отримати значення ключа динамічно) ЯК ВИКОРИСТОВУЮТЬСЯ Generics для обєктів
const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
  //   gender: "male",
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const named = getProperty(person, "name"); // Output: "John"
const agge = getProperty(person, "age"); // Output: 30
const gender = getProperty(person, "gender"); // undefined
// <T, K extends keyof T > // задаємо параметри для динамічної типызації.
// ПЕРЕДАЄМО через кому стільки дигнаімічних типів, скільки динамічних аршументів функції

// function getProperty має 2 динамічних типа №1 це T №2 це K
// Тип №1 присвоюється першому параметру obj
// Тип №1 присвоюється другому параметру key
// Ми хочемо розширити поведінку другого типу key за рахунок того що будемо перевіряти чи дійсно
// існує в обєкті такий ключ який ми передаємо у виклик функції другим аргументом.
//  Якщо передаємо ключ якого немає в обєкті то буде помилка шо такого ключа не існує

// 5 ІНСТРУМЕНТІВ GENERICS ЯКІ РОЗШИРЮЮТЬ БАЗОВИЙ ФУНКЦІОНАЛ!
// ІНСТРУМЕНТ №1

// interface UserProfile {
//   //РОБИМО ТИПІЗАЦІЮ ОБЄКТА(ОПИСУЄМО ЦЕЙ ОБЄКТ) (ЯКИЙ МАЄ 3 КЛЮЧА)
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   // ТИПІЗУВАЛИ наш ОБЄКТ за допомогою interface
//   username: "johndoe",
//   email: "john.doe@example.com",
//   age: 28,
// };
// // Функція яка буде оновлювати (розширяти) профіль.
// //Приймає 2 параметра profile - об'єкт старого профіля , updates - новий об'єкт оновлення (передаємо зміни у вигляді об'єкта)
// function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const updatedProfile = updateProfile(originalProfile, { age: 29 });
