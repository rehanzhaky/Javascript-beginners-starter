// Use const when u know the value of the variable not might change during the execution of ur program.
// Assign a value to the variable
const birthYear = 2001;
// prints the value of the variable
console.log(birthYear);

// const birthYear = 2002; this code will threw an error because u can't change the value of the variable.

// if a const variable holds an object or an array, u can change the properties of the object, but u cannot reassign the variable to a new object.
// Assign a value to the variable
const motorcycle = {
  brand: "Beat",
  policeNumber: 123456789,
};
// Modifying a property of the object
motorcycle.policeNumber = 987654321;
// prints the value of the variable
console.log(motorcycle);
