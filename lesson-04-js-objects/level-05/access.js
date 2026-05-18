// TODO: Demonstrate dot-notation property access and default-export the result/example.
// Example: const user = { name: 'Ava' }; export default user.name;

const letters = ["a", "b", "c"];
const item = letters[0];

const student = {
  level: 2,
  firstname: "Yana",
  lastname: "Sutton",
};
const item2 = student.level;
console.log(item2);

export default student.level;
