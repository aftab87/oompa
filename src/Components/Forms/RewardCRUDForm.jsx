import React, { useState, useRef, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "Components/InputGroup";
import { userContext } from "App";

function RewardsCRUDForm(props) {
  const { reward } = props;
  const [kids, setKids] = useState(null);
  //   const [reward, setReward] = useState(null);
  const [selectedKids, setSelectedKids] = useState([]);
  const [validated, setValidated] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [user, setUser] = useContext(userContext);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const pointsRef = useRef();

  async function callGetAllKids() {
    // callGetAllKids

    await fetch("http://localhost:3001/kids/" + user.id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setKids(json));
  }
  //   async function callGetReward(params) {
  //     await fetch("http://localhost:3001/dashboard/reward/" + params, { method: "GET" })
  //       .then((data) => data.json())
  //       .then((json) => json)
  //       .then((json) => setReward(json));
  //   }

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllKids();
      const params = new URLSearchParams("reward");
      //   console.log(params);
      //   if (params) callGetReward(params);
    }
    if (reward) {
      titleRef.current.value = reward.title;
      descriptionRef.current.value = reward.description;
      imageRef.current.value = reward.image;
      pointsRef.current.value = reward.points;
    }
  }, [firstRun, reward]);

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
    const url = reward ? "http://localhost:3001/dashboard/rewards/" + reward._id : "http://localhost:3001/dashboard/rewards/";

    event.preventDefault(); // prevent page reload
    // to fill in based on callPostBody
    fetch(url, {
      method: reward ? "PUT" : "POST",
      body: JSON.stringify({
        parent_uid: user.id,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        kids: selectedKids,
        image: imageRef.current.value,
        points: pointsRef.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((data) => data.json());
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

  return (
    <div className="container">
      <div className="form">
        <div className="text-center my-5">
          {props.title && <h1>{props.title}</h1>}
          {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit} >

                    <InputGroup type="text" label="Title" placeholder="Name of reward..." required ref={titleRef} />
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
          <InputGroup type="text" label="Title" placeholder="Name of reward..." required ref={titleRef} />
          <InputGroup type="text" as="textarea" rows={4} label="Description" placeholder="Please describe reward..." required ref={descriptionRef} />
          {/* TODO:MAKE CUSTOM LABEL */}
          <Form.Label>Kids</Form.Label>
          <div className="d-flex gap-3">{kids && kids.map((kid) => <InputGroup type="checkbox" key={kid._id} label={kid.first_name} value={kid._id} onKidChange={handleKidsSelection} />)}</div>
          {/* <InputGroup type="text" label="Select Child" placeholder="Child name..." required ref={childRef} /> */}
          <InputGroup type="text" label="Image" placeholder="Insert image..." required ref={imageRef} />
          <InputGroup type="number" label="Points" placeholder="Number of points..." required ref={pointsRef} />

          <Button type="submit">Submit form</Button>
        </Form>
        {/* FIXME: REMOVE THIS LINK */}
        <a href={"http://localhost:3000/rewards/" + reward?._id + "/edit"}>link to edit page</a>
      </div>
    </div>
  );
}

export default RewardsCRUDForm;
