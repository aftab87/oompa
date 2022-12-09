import React, { useState, useRef, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "Components/InputGroup";
import { userContext } from "App";
import { NavLink, useNavigate } from "react-router-dom";

function ChoresCRUDForm(props) {
  const { mission } = props;
  const [kids, setKids] = useState(null);

  const [selectedKids, setSelectedKids] = useState(mission ? mission.kids : []);
  const [selectedDays, setSelectedDays] = useState(mission ? mission.repetition : []);
  const [validated, setValidated] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [user, setUser] = useContext(userContext);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const days = [
    { name: "sunday", number: 0 },
    { name: "monday", number: 1 },
    { name: "tuesday", number: 2 },
    { name: "wednesday", number: 3 },
    { name: "thursday", number: 4 },
    { name: "friday", number: 5 },
    { name: "saturday", number: 6 },
  ];

  // const [daysObj, setDaysObj] = useState(null);
  // setDaysObj(JSON.stringify(days));

  const navigate = useNavigate();

  const titleRef = useRef();
  const pointsRef = useRef();
  const imageRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const repetitionRef = useRef();

  async function callGetAllKids() {
    // callGetAllKids
    await fetch("http://localhost:3001/kids/" + user.id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setKids(json));
  }

  async function deleteMission() {
    await fetch("http://localhost:3001/chores/" + mission._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          navigate("/dashboard/missions");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllKids();

      if (mission) console.log("test", mission.repetition);
    }
  }, [firstRun]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      registeringReward();
    }
    setValidated(true);
  };

  const deleteHandler = () => {
    setShowConfirmButton((showing) => !showing);
  };

  const registeringReward = () => {
    const url = mission ? "http://localhost:3001/chores/" + mission._id : "http://localhost:3001/chores/";
    let method = mission ? "PUT" : "POST";

    let body = JSON.stringify({
      parent_uid: user.id,
      title: titleRef.current.value,
      start_date: startDateRef.current.value,
      end_date: endDateRef.current.value,
      kids: selectedKids,
      image: imageRef.current.value,
      points: pointsRef.current.value,
      repetition: selectedDays,
    });

    // to fill in based on callPostBody
    fetch(url, {
      method: method,
      body: body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          console.log(json);
          navigate("/dashboard/missions");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleKidsSelection = (username, selected) => {
    if (selected && !selectedKids.includes(username)) {
      // console.log(`adding ${username} to selected`)
      setSelectedKids((selectedKids) => {
        let temp = [...selectedKids, username];
        return temp;
      });
    } else if (!selected && selectedKids.includes(username)) {
      // console.log(`removing ${username} from selected`)
      setSelectedKids((selectedKids) => {
        let temp = [...selectedKids];
        return temp.filter((kid) => kid !== username);
      });
    }
  };
  const handleDaysSelection = (number, selected) => {
    if (selected && !selectedDays.includes(number)) {
      console.log(`adding ${number} to selected`);
      setSelectedDays((selectedDays) => {
        let temp = [...selectedDays, number];
        return temp;
      });
    } else if (!selected && selectedDays.includes(number)) {
      console.log(`removing ${number} from selected`);
      setSelectedDays((selectedDays) => {
        let temp = [...selectedDays];
        return temp.filter((day) => day !== number);
      });
    }
  };

  return (
    <div className="container my-5 row justify-content-center align-items-center">
      <div className="form col col-lg-9">
        <div className="text-center my-5">
          <h1>{mission ? props.title : "Add a Mission"}</h1>
        </div>
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit} >

                    <InputGroup type="text" label="Title" placeholder="Name of mission..." required ref={titleRef} />
                    <InputGroup type="text" as="textarea" rows={4} label="Description" placeholder="Please describe reward..." required ref={descriptionRef} />
                    <InputGroup type="checkbox"  label="Select Child" placeholder="Child name..." required ref={childRef} />
                    <InputGroup type="text" label="Image" placeholder="Insert image..." required ref={imageRef} />
                    <InputGroup type="number" label="Points" placeholder="Number of points..." required ref={pointsRef} />
                    <div className='text-center my-5'>
                        <Button type="submit">Submit form</Button>
                    </div>
                </Form>
            </div> */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <InputGroup type="text" label="Title of Mission(s)" placeholder="Name of mission..." required ref={titleRef} defaultValue={mission ? mission.title : ""} />
          <InputGroup type="number" label="Points" placeholder="Please enter # points" required ref={pointsRef} defaultValue={mission ? mission.points : ""} />
          {/* TODO:MAKE CUSTOM LABEL */}
          <Form.Label>Kids</Form.Label>
          <div className="d-flex gap-3">
            {kids &&
              kids.map((kid) => (
                <InputGroup type="checkbox" key={kid._id} label={kid.first_name} value={kid._id} onKidChange={handleKidsSelection} defaultChecked={mission ? mission.kids.includes(kid._id) : false} />
              ))}
          </div>
          {/* <InputGroup type="text" label="Select Child" placeholder="Child name..." required ref={childRef} /> */}
          <InputGroup type="text" label="Image" placeholder="Insert image..." required ref={imageRef} defaultValue={mission ? mission.image : ""} />
          <InputGroup type="date" label="Start Date" placeholder="Enter start date..." required ref={startDateRef} defaultValue={mission ? mission.start_date.substring(0, 10) : ""} />
          <InputGroup type="date" label="End Date" placeholder="Enter end date..." required ref={endDateRef} defaultValue={mission ? mission.end_date.substring(0, 10) : ""} />
          <div className="d-flex gap-3">
            {days.map((day) => (
              <InputGroup
                type="checkbox"
                key={day.name}
                label={day.name}
                value={day.number}
                onKidChange={handleDaysSelection}
                defaultChecked={mission ? mission.repetition.includes(day.number) : false}
              />
            ))}
          </div>

          <div className="text-center d-flex justify-content-center gap-5">
            <Button type="submit">{mission ? "Save" : "Create"}</Button>
            {mission && (
              <Button variant="danger" onClick={deleteHandler}>
                Delete
              </Button>
            )}
            <Button as={NavLink} to={"/dashboard/missions"} className="btn-danger">
              Cancel
            </Button>
          </div>
          <div className="text-center d-flex justify-content-center gap-5 mt-5">
            {showConfirmButton && (
              <div className="alert alert-danger text-center">
                <h3>Are you sure you want to delete {mission.first_name}'s account?</h3>
                <p>They will lose all the information associated to their account</p>
                <Button variant="danger" onClick={deleteMission}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ChoresCRUDForm;
