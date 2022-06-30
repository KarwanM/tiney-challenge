import React from "react";

const Register = () => {


    // const handleSignIn = (e) => {
    //     e.preventDefault();
    //     fetch("http://localhost:4000/children/" + e.target.value, {
    //       method: "PATCH",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         id: e.target.value,
    //         signedIn: true,
    //         hour: newDate.getHours(),
    //         minute: newDate.getMinutes(),
    //       }),
    //     });
    //   };

  return <div className="register">
    <form>
        <label for="name">Name</label>
        <input type="text"/>
        <label for="age">Age</label>
        <input type="number"/>
    </form>
  </div>;
};

export default Register;
