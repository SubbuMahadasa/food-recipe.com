import React from "react";

function Lists() {
  const Persons = [
    {
      name: "sandeep",
      age: "22",
      skill: "Angular"
    },
    {
      name: "Ganesh",
      age: "21",
      skill: "React"
    },
    {
      name: "Pawan",
      age: "21",
      skill: "Vue"
    }
  ];
  const Namelist = Persons.map(person => (
    <h2>
      I am {person.name}. I am {person.age}. I know {person.skill}
    </h2>
  ));

  return <div>{Namelist}</div>;
}

export default Lists;
