import InputGroup from "Components/InputGroup";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function ContactForm() {
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
    <div className="container">
      <Form className="text-start" noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup type="text" placeholder="Name" required label="Name" />
        <InputGroup type="email" placeholder="Email" required label="Email" />
        <InputGroup type="text" placeholder="Subject" label="Subject" />
        <InputGroup type="text" placeholder="Message" required as="textarea" rows={8} label="Message" />
        <div className="text-center my-5">
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
