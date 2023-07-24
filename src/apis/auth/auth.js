// save user information on database
export const saveUser = (email,userInformation) => {
    fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  
  export default saveUser
  