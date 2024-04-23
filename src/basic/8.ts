// ЛОГІКА РОБОТИ ТИПІЗАЦІЇ ОБ'ЄКТА:
// 1) Під кожен обєкт створюємо сві власний тип type або interface з типізацією конкретних полів об'єкта
// 2) ОБОВЯЗКОВО Типізуємо паремтр який прилітає в ФУНКЦІЮ
// type userProfi = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };
// АБО;
// interface userProf {
//   userName: string;
//   age: number;
//   isActive: boolean;
// }

// 1) ВАРІАНТ КОЛИ ФУНКЦІЯ ПРИЙМАЄ ОБ'ЄКТ!
type userProfile = {
  userName: string;
  age: number;
  isActive: boolean;
};
// ОБОВЯЗКОВО Типізуємо паремтр user (типізуємо аргумент функції об'єкта)
function displayUserProfile(userOK: userProfile) {
  return `User name is ${userOK.userName} hi is ${userOK.age} years old and his is ${userOK.isActive}`;
}
const user = {
  userName: "Bob",
  age: 12,
  isActive: true,
};

const userOK = {
  userName: "Pavlo",
  age: 33,
  isActive: false,
};
console.log(displayUserProfile(userOK));

//2)  ВАРІАНТ КОЛИ ФУНКЦІЯ ПРИЙМАЄ не об'єкт а рядок
// фУНКЦІЯ БУДЕ ПРИЙМАТИ ІМ'Я і буде виводити його в консоль! і треба типізувати парметр обовязковоЙ"
function logName(name: string, age: number) {
  return `${name} has ${age} old`;
}
console.log(logName("pavlo", 33));

// type Direction = "up" | "down" | "left" | "right";
// function move(direction: Direction) {}
// move("up");
// move("down");
// move("right");
// move("forward");

// any

function logDetails(value: any) {
  console.log(`Value: ${value}, Type of value: ${typeof value}`);
}

// Union Types
// Є у нас функція яка форматує дані які вводяться всередину цієї функції (всередину функції прилітає як string так і number )
// Логіка якщо приймаємо число то це число округляємо до 2-х знаків після коми якщо приймаємо рядок то цей рядок приймаємо до регістру
function formatInput(input: string | number) {
  if (typeof input === "number") {
    return input.toFixed(2); // Formats the number to two decimal places
  } else {
    return input.toUpperCase(); // Converts the string to uppercase
  }
}

// ТИПІЗАЦІЯ РЕТЬОРНУ!
// ТРЕБА ТИПІЗУВАТИ ТО ЩО ФУНКЦІЯ ПОВЕРТАЄ ОКРІМ ТИПІЗАЦІЇ ПАРАМЕТРАМ!
// ТИП ТОГО ЩО ФУНКЦІЯ ПОВЕРТАЄ!(string, number, boolean, {} або void якщо нічого не повертає)
function loggeName(name: string): string {
  return `${name}`;
}
// Ця функція нічого не повертає щось роблять але у них немає ретьорна!
function loggName(name: string): void {
  console.log(`${name}`);
}

// Тип never (теж для типізації ретьорну функції і він використовується тоді коли наша функція повертає помилку)
function errorHandler(message: string): never {
  throw new Error(message);
}
errorHandler("Critical error occurred!"); // Throws an Error with the provided message

interface Usere {
  name: string;
  age: number;
  lastName?: string;
  sayHello(): string;
  sayBye(): void;
  showAge(userAge: number): string;
}
// 1 варіант типізуємо кожен параметр метода окремо
const users = {
  name: "Bob",
  age: 12,
  sayHello() {
    return "Hello";
  },
  sayBye() {
    console.log("Bye");
  },
  showAge(userAge: number) {
    return `My age is ${userAge}`;
  },
};
// 2 варіант робимо один interface і типізувати весь обєкт
const student: Usere = {
  name: "Bob",
  age: 12,
  sayHello() {
    return "Hello";
  },
  sayBye() {
    console.log("Bye");
  },
  showAge(userAge) {
    return `My age is ${userAge}`;
  },
};

// import axios from "axios";
// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.
// async function fetchData(url: string) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }
