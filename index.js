// script.js

const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Task 1 - PrintDeveloperbyMap()
function PrintDeveloperbyMap() {
  const developerArray = employees
    .filter((employee) => employee.profession === "developer")
    .map((developer) => {
      console.log(developer);
      return developer; // Ensure the map returns the developer object
    });
  return developerArray;
}

// Task 2 - PrintDeveloperbyForEach()
function PrintDeveloperbyForEach() {
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Task 3 - addData()
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

// Task 4 - removeAdmin()
function removeAdmin() {
  const updatedEmployees = employees.filter((employee) => employee.profession !== "admin");
  console.log(updatedEmployees);
}

// Task 5 - ConcatinateArray()
function ConcatinateArray() {
  const newArray = [
    { id: 5, name: "alice", age: "22", profession: "manager" },
    { id: 6, name: "bob", age: "25", profession: "designer" },
    { id: 7, name: "charlie", age: "23", profession: "analyst" },
  ];

  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);
}

// Uncomment the function calls below to test each function individually
// PrintDeveloperbyMap();
// PrintDeveloperbyForEach();
// addData();
// removeAdmin();
// ConcatinateArray();
