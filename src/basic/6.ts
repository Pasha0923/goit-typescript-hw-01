// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості.
// Зверніть увагу, що адреса є необов'язковою властивістю.

// створюємо свій власний тип  для типізації обєктів
interface UserObj {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: UserObj = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: UserObj = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
