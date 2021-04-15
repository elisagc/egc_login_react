import React, { useState } from "react";
import Login from "./components/Login";
import Card from "./components/Card";
import Body from "./components/Body";

const App = () => {
  const [userData, setUserData] = useState("");

  return (
    <Body>
      {!userData ? (
        <Login setUserData={setUserData} userData={userData} />
      ) : (
        <Card userData={userData} />
      )}
    </Body>
  );
};

export default App;
