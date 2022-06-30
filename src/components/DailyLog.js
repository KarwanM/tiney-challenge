import React, { useState, useEffect } from "react";
import Data from "../data.json";

const DailyLog = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    setChildren(Data.children);
  }, []);

  return (
    <div className="dayli-log">
      <ul>
        {children ? <p>{children.map((child) => {
          return <li key={child.id}>{child.firstName}</li>
        })}</p> : <p>Loadding...</p>}
      </ul>
    </div>
  );
};

export default DailyLog;
