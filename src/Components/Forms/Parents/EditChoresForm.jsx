import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ChoresCRUDForm from "../ChoresCRUDForm";



export default function EditChoresForm() {
  const [mission, setMission] = useState();
  const navigate = useNavigate();
  const [firstRun, setFirstRun] = useState(true)
  const [searchParams] = useSearchParams();



  async function getMission(id) {
    await fetch("http://localhost:3001/chore/" + id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => {
        console.log(json)
        setMission(json.mission)
      });
  }

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false)
      const id = searchParams.get("id")
      if (id)
        getMission(id)
    }
  }, [])

  return (
    <>
      {mission && (
        <>
          <ChoresCRUDForm mission={mission} title="Edit Mission" />
        </>
      )}
    </>
  )
}

