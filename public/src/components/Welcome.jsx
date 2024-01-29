import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function fetchData() {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
      }
      fetchData();
  }, []);
  return (
    <Container>
     
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
.container {
  display: ;
  justify-content: center;
  align-items: center;
  color: #333;
  flex-direction: column
  height: 100%;
}
span {
  color: #6c5ce7; 
}

`;
