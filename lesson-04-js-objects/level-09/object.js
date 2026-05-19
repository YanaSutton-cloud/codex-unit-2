function greet() {
  console.log("Hello World!");
}

const user = {
  name: "Yana",
  email: "my@email.com",
};

user.address = "777 abc St.";
user.greet = greet;

export default user;
