import React, { useState, useEffect } from "react";

function DisplayKids() {
  async function callGetAllKids() {
    await fetch("http://localhost:3001/kids", { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setKids(json));
  }

  const [kids, setKids] = useState(null);
  useEffect(() => {
    callGetAllKids();
  }, [kids]);

  return <>{kids && kids.map((kid) => <h1 key={kid._id}>{kid.first_name}</h1>)}</>;
}

export default DisplayKids;
