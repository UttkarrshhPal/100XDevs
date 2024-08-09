
let user = {
  name: "Utkarsh",
  age: 21,
  gender: "Male",
};


function greetUser(user) {
  let title;
  if(user.gender.toLowerCase()==='male'){
    title = 'Mr';
  }
  else if(user.gender.toLowerCase()==='female'){
    title = 'Mrs';
  }
  else{
    title = 'Others';
  }
  let eligible = false;
  if(user.age>=18){
      eligible=true;
  }
  console.log(`${title} ${user.name} ${user.age} ${user.gender} ${eligible?'is eligible to vote':'is not eligible to vote'}`);
}

greetUser(user);