import React, { useState, useEffect } from "react";
import API from "../config/api.js";

const PersonsHook = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    API.get("users").then((res) => {
      console.log(res);
      const persons = res.data;
      console.log({ persons }, "persons");
      setPersons(persons);
    });
  }, []);

  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
};

export default PersonsHook;
