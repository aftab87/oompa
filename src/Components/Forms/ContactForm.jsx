import InputGroup from "Components/InputGroup";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      navigate("/contactconfirmation")
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <Form className="text-start" noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup type="text" placeholder="Name" required label="Name" ref={nameRef} />
        <InputGroup type="email" placeholder="Email" required label="Email" ref={emailRef} />
        <InputGroup type="text" placeholder="Subject" label="Subject" ref={subjectRef} />
        <InputGroup type="text" placeholder="Message" required as="textarea" rows={8} label="Message" ref={messageRef} />
        <div className="text-center my-5">
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
