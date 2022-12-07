import React from "react";

const kids = callGetAllKids();

function DisplayKids() {
  kids.forEach((kid) => {
    console.log(kid.first_name);
  });

  return <h1>hello</h1>;
}

async function callGetAllKids() {
  await fetch("http://localhost:3001/kids", { method: "GET" }).then((data) => data.json());
  // .then((json) => alert(JSON.stringify(json)));
}

export default DisplayKids;
