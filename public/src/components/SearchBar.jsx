
import React, { useState } from "react";
import styled from "styled-components";

export default function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #4e0eff;
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;









