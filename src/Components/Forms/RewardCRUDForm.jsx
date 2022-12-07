import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'Components/InputGroup';


function RewardsCRUDForm(props) {
    const [kids, setKids] = useState(null);
    const { reward } = props;
    const [validated, setValidated] = useState(false);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const childRef = useRef();
    const imageRef = useRef();
    const pointsRef = useRef();
    
    async function callGetAllKids() {
        await fetch("http://localhost:3001/kids", { method: "GET" })
          .then((data) => data.json())
          .then((json) => json)
          .then((json) => setKids(json));
      }


    useEffect(() => {
        if (!reward){
        callGetAllKids();
            return
        }else
        callGetAllKids();    
        titleRef.current.value = reward.title
        descriptionRef.current.value = reward.description
        imageRef.current.value = reward.image
        pointsRef.current.value = reward.points
    }, [reward, kids])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            registeringReward(event)
        }

        setValidated(true);
    };



    const registeringReward = (event) => {
        const url = reward ? "http://localhost:3001/rewards/" + reward._id : "http://localhost:3001/rewards/"

        event.preventDefault(); // prevent page reload
        // to fill in based on callPostBody
        fetch(url, {
            method: reward ? "PUT" : "POST",
            body: JSON.stringify({
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                kids: childRef.current.value,
                image: imageRef.current.value,
                points: pointsRef.current.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((data) => data.json())
    };
    return (
        <div className="container">
            <div className="text-center my-5">
                {props.title && <h1>{props.title}</h1>}
                {props.subtitle && <h3>{props.subtitle}</h3>}
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >

                <InputGroup type="text" label="Title" placeholder="Name of reward..." required ref={titleRef} />
                <InputGroup type="text" as="textarea" rows={4} label="Description" placeholder="Please describe reward..." required ref={descriptionRef} />
                {/* TODO:MAKE CUSTOM LABEL */}
                <Form.Label>Kids</Form.Label>
                <div className="d-flex gap-3" >{kids && kids.map((kid) => <InputGroup type="checkbox" key={kid._id} label={kid.first_name} value={kid.username} ref={childRef} /> )}</div>
                {/* <InputGroup type="text" label="Select Child" placeholder="Child name..." required ref={childRef} /> */}
                <InputGroup type="text" label="Image" placeholder="Insert image..." required ref={imageRef} />
                <InputGroup type="number" label="Points" placeholder="Number of points..." required ref={pointsRef} />

                <Button type="submit" >Submit form</Button>
            </Form>
            <a href={"http://localhost:3000/rewards/" + reward?._id + "/edit"} >link to edit page</a>
        </div>
    );
}

export default RewardsCRUDForm;


