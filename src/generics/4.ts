type Usser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Usser, updates: Partial<Usser>) {
  return { ...initialValues, ...updates }; // Оновлення користувача
}
const originalProfile: Usser = {
  name: "john",
  surname: "Doe",
  email: "JohnDoe@gmail.com",
  password: "password123456789",
};
console.log(
  createOrUpdateUser(originalProfile, {
    email: "user@mail.com",
    password: "password123",
  })
);
