import React, { useState, useEffect } from "react";

const History = () => {
  const [children, setChildren] = useState([]);

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

  return (
    <div className="history">
      <ul>
        {children ? (
          <div>
            {/* <h3>{children[0].signedIn[0].year}</h3> */}
            {children.map((child) => {
              return (
                <li key={child.id}>
                  <img src={child.src} />
                  <div className="name">
                    <p>{child.name}</p>
                  {child.signedIn> 0?(
                    <>
                    <span>
                    in at {child.signedIn[child.signedIn.length -1].hour}:{child.signedIn[child.signedIn.length -1].minute}
                  </span>
                  <span>
                    out at {child.signedOut[child.signedOut.length -1].hour}:{child.signedOut[child.signedOut.length -1].minute}
                  </span>
                  </>
                  ):(
                    <>
                    <span>
                    in at {child.hour}:{child.minute}
                  </span>
                  <span>
                    out at {child.hour}:{child.minute}
                  </span>
                  </>
                  )}
                    
                  </div>
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

export default History;
