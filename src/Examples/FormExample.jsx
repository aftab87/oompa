import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from '../Components/InputGroup';

function FormExample() {
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
            {/* Input with regex example */}
            <InputGroup type="text" label="Input Example" placeholder="Username" required pattern={/^\d{3}$/} pattern_message="Please input 3 digits" />
            {/* Textarea example */}
            <InputGroup type="text" as="textarea" rows={21} label="TextArea Example" placeholder="This is a long text" required />

            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default FormExample;