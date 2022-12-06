import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'Components/InputGroup';


function RewardsCRUDForm() {

    const [validated, setValidated] = useState(false);
    const titleRef = useRef();
    const descriptionRef = useRef();
    const childRef = useRef();
    const imageRef = useRef();
    const pointsRef = useRef();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    const registeringReward = (event) => {

        event.preventDefault(); // prevent page reload
        // to fill in based on callPostBody
        fetch("http://localhost:3001/rewards", {
            method: "POST",
            body: JSON.stringify({
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                child: childRef.current.value,
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
            <Form noValidate validated={validated} onSubmit={handleSubmit} >

                <InputGroup type="text" label="Title" placeholder="Name of reward..." required ref={titleRef}/>
                <InputGroup type="text" as="textarea" rows={4} label="Description" placeholder="Please describe reward..." required ref={descriptionRef}/>
                <InputGroup type="text" label="Select Child" placeholder="Child name..." required ref={childRef}/>
                <InputGroup type="text" label="Image" placeholder="Insert image..." required ref={imageRef}/>
                <InputGroup type="number" label="Points" placeholder="Number of points..." required ref={pointsRef}/>

                <Button type="submit" onClick={registeringReward}>Submit form</Button>
            </Form>
        );
    }

export default RewardsCRUDForm;


 