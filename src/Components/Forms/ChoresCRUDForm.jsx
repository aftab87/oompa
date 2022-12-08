import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'Components/InputGroup';


function ChoresCRUDForm(props) {
    const { missions } = props;
    const [kids, setKids] = useState(null);
    const [selectedKids, setSelectedKids] = useState([]);
    const [validated, setValidated] = useState(false);
    const [firstRun, setFirstRun] = useState(true);

    const titleRef = useRef();
    const pointsRef = useRef();
    const imageRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const repetitionRef = useRef();

    async function callGetAllKids() {
        // callGetAllKids
        await fetch("http://localhost:3001/kids", { method: "GET" })
            .then((data) => data.json())
            .then((json) => json)
            .then((json) => setKids(json));
    }


    useEffect(() => {
        if (firstRun) {
            setFirstRun(false)
            callGetAllKids()
        }
        if (missions) {
            console.log(missions)
            titleRef.current.value = missions.title
            startDateRef.current.value = missions.startDate
            endDateRef.current.value = missions.endDate
            imageRef.current.value = missions.image
            pointsRef.current.value = missions.points
            repetitionRef.current.value = missions.repetition
        }
    }, [firstRun, missions])

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
        const url = missions ? "http://localhost:3001/dashboard/rewards/" + missions._id : "http://localhost:3001/dashboard/missions/"

        event.preventDefault(); // prevent page reload
        // to fill in based on callPostBody
        fetch(url, {
            method: missions ? "PUT" : "POST",
            body: JSON.stringify({
                title: titleRef.current.value,
                startDate: startDateRef.current.value,
                endDate: endDateRef.current.value,
                kids: selectedKids,
                image: imageRef.current.value,
                points: pointsRef.current.value,
                repetition: repetitionRef.current.value,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((data) => data.json())
    };

    const handleKidsSelection = (username, selected) => {

        if (selected && !selectedKids.includes(username)) {
            // console.log(`adding ${username} to selected`)
            setSelectedKids(selectedKids => {
                let temp = [...selectedKids, username]
                return temp;
            })
        } else if (!selected && selectedKids.includes(username)) {
            // console.log(`removing ${username} from selected`)
            setSelectedKids(selectedKids => {
                let temp = [...selectedKids]
                return temp.filter(kid => kid !== username)
            })
        }
    }

    return (
        <div className="container">
            <div className='form'>
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
                <Form noValidate validated={validated} onSubmit={handleSubmit} >

                    <InputGroup type="text" label="Title of Mission(s)" placeholder="Name of missions..." required ref={titleRef} />
                    <InputGroup type="number"  label="Points" placeholder="Please enter # points" required ref={pointsRef} />
                    {/* TODO:MAKE CUSTOM LABEL */}
                    <Form.Label>Kids</Form.Label>
                    <div className="d-flex gap-3" >
                        {kids &&
                            kids.map((kid) => <InputGroup type="checkbox" key={kid._id} label={kid.first_name} value={kid.username} onKidChange={handleKidsSelection} />)
                        }
                    </div>
                    {/* <InputGroup type="text" label="Select Child" placeholder="Child name..." required ref={childRef} /> */}
                    <InputGroup type="text" label="Image" placeholder="Insert image..." required ref={imageRef} />
                    <InputGroup type="date" label="Start Date" placeholder="Enter start date..." required ref={startDateRef} />
                    <InputGroup type="date" label="End Date" placeholder="Enter end date..." required ref={endDateRef} />
                    <InputGroup type="number" label="Repitions" placeholder="How many times..." required ref={repetitionRef} />

                    <div className='text-center'>
                        <Button type="submit" >Submit form</Button>
                    </div>
                </Form>
            
            </div>
        </div>
    );
}

export default ChoresCRUDForm;


