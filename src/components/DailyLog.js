import React, { useState, useEffect } from "react";
import Data from "../db.json";

const DailyLog = () => {
  const [children, setChildren] = useState([]);

  const newDate = new Date();

  useEffect(() => {
    // setChildren(Data.children);

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

    if (children.signedIn) {
      try {
        fetch("http://localhost:4000/children/" + e.target.value, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: e.target.value,
            signIn: true,
            hour: newDate.getHours(),
            minute: newDate.getMinutes(),
            signedIn: [
              ...children[e.target.value - 1].signedIn,
              {
                minute: newDate.getMinutes(),
                hour: newDate.getHours(),
                day: newDate.getDate(),
                month: newDate.getMonth(),
                year: newDate.getFullYear(),
              },
            ],
          }),
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        fetch("http://localhost:4000/children/" + e.target.value, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: e.target.value,
            signIn: true,
            hour: newDate.getHours(),
            minute: newDate.getMinutes(),
            signedIn: {
              minute: newDate.getMinutes(),
              hour: newDate.getHours(),
              day: newDate.getDate(),
              month: newDate.getMonth(),
              year: newDate.getFullYear(),
            },
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSignOut = (e) => {
    e.preventDefault();

    if(children.signedOut){
      try {
        fetch("http://localhost:4000/children/" + e.target.value, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: e.target.value,
            signIn: false,
            signedOut: [
              ...children[e.target.value].signedIn,
              {
                minute: newDate.getMinutes(),
                hour: newDate.getHours(),
                day: newDate.getDate(),
                month: newDate.getMonth(),
                year: newDate.getFullYear(),
              },
            ],
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }else{
      try {
        fetch("http://localhost:4000/children/" + e.target.value, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: e.target.value,
            signIn: false,
            signedOut: 
              {
                minute: newDate.getMinutes(),
                hour: newDate.getHours(),
                day: newDate.getDate(),
                month: newDate.getMonth(),
                year: newDate.getFullYear(),
              },
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }
    
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
                    <p>{child.name}</p>
                    {child.signIn ? (
                      child.hour.length > 2 ? (
                        <span>
                          Signed in at 0{child.hour}:{child.minute}
                        </span>
                      ) : (
                        <span>
                          Signed in at {child.hour}:{child.minute}
                        </span>
                      )
                    ) : (
                      <span>Signed out</span>
                    )}
                  </div>
                  {child.signIn ? (
                    <button
                      value={child.id}
                      className="signed-in"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </button>
                  ) : (
                    <button
                      value={child.id}
                      className="signed-out"
                      onClick={handleSignIn}
                    >
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
