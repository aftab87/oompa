import React from "react";
function AddChore() {
  return (
    <>
      <button onClick={addChore}>add chore</button>

      <button onClick={updateChore}>update chore</button>

      <button onClick={callGetAllChores}>get all Chores by parent</button>
      <button onClick={callDeleteChore}>Delete chore</button>
      <button onClick={addKidd}>add kid</button>
      <button onClick={updateKidd}>update kid</button>
      <button onClick={callGetAllKids}>get all Kids by parent</button>
      <button onClick={callDeleteKid}>Delete Kid</button>
      <button onClick={addParent}>add Parents</button>
      <button onClick={updateParent}>update Parent</button>
    </>
  );
}

// *********CHORES****************
function addChore() {
  fetch("http://localhost:3001/chores", {
    method: "POST",
    body: JSON.stringify({
      parent_uid: "ugly elmo",
      title: "kill jesus",
      points: 2,
      image: "jesus on a horeseC",
      kids: "Jason",
      start_date: new Date(),
      end_date: new Date(),
      repetition: 2,
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function updateChore() {
  fetch("http://localhost:3001/chores", {
    method: "PUT",
    body: JSON.stringify({
      parent_uid: "25",
      title: "kill jesus",
      points: 2,
      image: "kid washing hooker",
      kids: "jason",
      start_date: new Date(),
      end_date: new Date(),
      repetition: 2,
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callGetAllChores() {
  fetch("http://localhost:3001/chores", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callDeleteChore() {
  fetch("http://localhost:3001/chores", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

// *********KIDS****************
function addKidd() {
  fetch("http://localhost:3001/kids", {
    method: "POST",
    body: JSON.stringify({
      parent_uid: "26",
      username: "funnyLookingKid2",
      password: "Hello",
      first_name: "Joe",
      avatar: "sexy magician",
      points: 4,
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function updateKidd() {
  fetch("http://localhost:3001/kids", {
    method: "PUT",
    body: JSON.stringify({
      parent_uid: "26",
      username: "funnyLookingKid3",
      password: "goodbye",
      first_name: "Janee",
      avatar: "sexy magician",
      points: 4,
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callGetAllKids() {
  fetch("http://localhost:3001/kids", { method: "GET" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function callDeleteKid() {
  fetch("http://localhost:3001/kids", { method: "DELETE" })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

// *********PARENTS****************
function addParent() {
  fetch("http://localhost:3001/Parents", {
    method: "POST",
    body: JSON.stringify({
      email: "elm@gmail.com",
      password: "!2Kskalsk",
      isVerified: true,
      avatar_uid: "100",
      appellation: "mr.DOODY",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}

function updateParent() {
  fetch("http://localhost:3001/parents", {
    method: "PUT",
    body: JSON.stringify({
      password: "!2Kskalsk",
      isVerified: false,
      avatar_uid: "200",
      appellation: "dadY",
    }),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((data) => data.json())
    .then((json) => alert(JSON.stringify(json)));
}
export default AddChore;
