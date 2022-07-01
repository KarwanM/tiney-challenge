import React, { useState, useEffect } from "react";

const Register = () => {
  const [children, setChildren] = useState([]);

  //   useEffect(() => {

  //     try {
  //       fetch("http://localhost:4000/children")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setChildren(data);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    // setChildren({ ...children,   });
    console.log(children);
    fetch("http://localhost:4000/children/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(children),
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setChildren({
      ...children,
      [e.target.id]: e.target.value,
      ["signIn"]: false,
      ["src"]:
        "https://cdn.cdnparenting.com/articles/2018/11/11133842/463272494-H.webp",
    });
  };

  return (
    <div className="register">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} />
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
