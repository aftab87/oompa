import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'Components/InputGroup';

function RewardsCRUDForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <InputGroup type="text" label="Title" placeholder="Name of reward..." required />
            <InputGroup type="text" as="textArea" rows={4} label="Description" placeholder="Please describe reward..." required />
            <InputGroup type="text" label="Select Child" placeholder="Child name..." required />
            <InputGroup type="text" label="Image" placeholder="Insert image..." required />
            <InputGroup type="number" label="Points" placeholder="Number of points..." required />
      
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default RewardsCRUDForm;