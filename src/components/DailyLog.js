import React, { useState, useEffect } from "react";
import Data from "../data.json";

const DailyLog = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    setChildren(Data.children);
  }, []);

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
                    <span>Signed out</span>
                  </div>

                  <button>Sign in</button>
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
