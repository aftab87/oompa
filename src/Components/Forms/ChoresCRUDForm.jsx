import React, { useState, useRef, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "Components/InputGroup";
import { userContext } from "App";
import { NavLink, useNavigate } from "react-router-dom";

function ChoresCRUDForm(props) {
  const { missions } = props;
  const [kids, setKids] = useState(null);

  const [selectedKids, setSelectedKids] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [validated, setValidated] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [user, setUser] = useContext(userContext);
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

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllKids();
    }
    if (missions) {
      console.log(missions);
      titleRef.current.value = missions.title;
      startDateRef.current.value = missions.startDate;
      endDateRef.current.value = missions.endDate;
      imageRef.current.value = missions.image;
      pointsRef.current.value = missions.points;
      repetitionRef.current.value = missions.repetition;
    }
  }, [firstRun, missions]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      registeringReward(event);
    }

    setValidated(true);
  };

  const registeringReward = (event) => {
    const url = missions ? "http://localhost:3001/chores/" + missions._id : "http://localhost:3001/chores/";

    event.preventDefault(); // prevent page reload
    // to fill in based on callPostBody
    fetch(url, {
      method: missions ? "PUT" : "POST",
      body: JSON.stringify({
        parent_uid: user.id,
        title: titleRef.current.value,
        start_date: startDateRef.current.value,
        end_date: endDateRef.current.value,
        kids: selectedKids,
        image: imageRef.current.value,
        points: pointsRef.current.value,
        repetition: selectedDays,
      }),
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
    <div className="container">
      <div className="form">
        <div className="text-center my-5">
          {props.title && <h1>{props.title}</h1>}
          {props.subtitle && <h3>{props.subtitle}</h3>}
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
          <InputGroup type="text" label="Title of Mission(s)" placeholder="Name of missions..." required ref={titleRef} />
          <InputGroup type="number" label="Points" placeholder="Please enter # points" required ref={pointsRef} />
          {/* TODO:MAKE CUSTOM LABEL */}
          <Form.Label>Kids</Form.Label>
          <div className="d-flex gap-3">{kids && kids.map((kid) => <InputGroup type="checkbox" key={kid._id} label={kid.first_name} value={kid._id} onKidChange={handleKidsSelection} />)}</div>
          {/* <InputGroup type="text" label="Select Child" placeholder="Child name..." required ref={childRef} /> */}
          <InputGroup type="text" label="Image" placeholder="Insert image..." required ref={imageRef} />
          <InputGroup type="date" label="Start Date" placeholder="Enter start date..." required ref={startDateRef} />
          <InputGroup type="date" label="End Date" placeholder="Enter end date..." required ref={endDateRef} />
          <div className="d-flex gap-3">
            {days.map((day) => (
              <InputGroup type="checkbox" key={day.name} label={day.name} value={day.number} onKidChange={handleDaysSelection} />
            ))}
          </div>

          <div className="text-center d-flex justify-content-center gap-5">
            <Button type="submit">Submit form</Button>
            <Button as={NavLink} to={"/dashboard/missions"} variant="danger">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ChoresCRUDForm;
