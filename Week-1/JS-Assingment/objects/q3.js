// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old


const users = [
  {
    name : "Utkarsh",
    age  : 17,
  },
  {
    name : "Sravan",
    age  : 21,
  }
]

function filterUsers(arr){
  return arr.filter(user=>user.age > 18);
}

console.log(filterUsers(users)); // Output: [{name: "Utkarsh", 