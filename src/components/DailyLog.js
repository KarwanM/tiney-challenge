import React, { useState, useEffect } from "react";
import Data from "../db.json";

const DailyLog = () => {
  const [children, setChildren] = useState([]);

  const newDate = new Date();

  useEffect(() => {
    setChildren(Data.children);

    try {
      fetch("http://localhost:4000/children")
        .then((res) => res.json())
        .then((data) => {
          setChildren(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/children/" + e.target.value, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.value,
        signedIn: true,
        hour: newDate.getHours(),
        minute: newDate.getMinutes(),
      }),
    });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/children/" + e.target.value, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.value,
        signedIn: false,
      }),
    });
  };

  return (
    <div className="daily-log">
      <p>You have {children.length} children expected in today</p>
      <ul>
        {children ? (
          <div>
            {children.map((child) => {
              return (
                <li key={child.id}>
                  <img src={child.src} />
                  <div className="name">
                    <p>{child.firstName}</p>
                    {child.signedIn ? (
                      child.hour.length > 2 ? (
                        <span>Signed in at 0{child.hour}:{child.minute}</span>
                      ) : (
                        <span>Signed in at {child.hour}:{child.minute}</span>
                      )
                    ) : (
                      <span>Signed out</span>
                    )}
                  </div>
                  {child.signedIn ? (
                    <button value={child.id} className="signed-in" onClick={handleSignOut}>
                      Sign out
                    </button>
                  ) : (
                    <button value={child.id} className="signed-out" onClick={handleSignIn}>
                      Sign in
                    </button>
                  )}
                </li>
              );
            })}
          </div>
        ) : (
          <p>Loadding...</p>
        )}
      </ul>
    </div>
  );
};

export default DailyLog;
