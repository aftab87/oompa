import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ChoresCRUDForm from "../ChoresCRUDForm";



export default function EditChoresForm() {


  const { id } = useParams();

  const [mission, setMission] = useState();



  function callDeleteParams() {
    fetch("http://localhost:3001/dashboard/missions/" + id, { method: "DELETE" })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }


  useEffect(() => {
    // to fill in based on callPostBody
    fetch("http://localhost:3001/dashboard/missions/" + id, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json()).then((data) => { setMission(data) })
  }, [id])

  return (

    <>
      <ChoresCRUDForm mission={mission} title="Edit Reward" />
      <div className='text-center m-3'>
        <Button variant="danger" as={NavLink} onClick={callDeleteParams}>DELETE</Button>
      </div>
    </>
  )
}

