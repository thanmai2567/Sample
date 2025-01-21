
function createProfile({ name, email }) {
    return { name, email };
  }
  



const user = {
    name: "Thanmai",
    age: 20,
    email: "re123@gmail.com",
    address: "hyd"
  };
  
  const profile = createProfile(user);
  console.log(profile);  
  