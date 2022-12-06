import React from "react";
function AddChore() {
  return (
    <>
      <button onClick={addChore}>register</button>

      <button onClick={addKid}>register</button>
    </>
  );
}

function addChore() {
  fetch("http://localhost:3001/chores/add", {
    method: "POST",
    body: JSON.stringify({
      parent_uid: "23",
      title: "kill cat",
      points: 2,
      image: "kid washing dishes",
      kids: ["jason", "Maria"],
      start_date: new Date(),
      end_date: new Date(),
      repetition: 2,
      funny: "test",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
function addKid() {
  fetch("http://localhost:3001/kids/addkid", {
    method: "POST",
    body: JSON.stringify({
      name: "john",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

export default AddChore;
