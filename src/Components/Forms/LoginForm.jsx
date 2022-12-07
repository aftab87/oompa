import InputGroup from "Components/InputGroup";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm({ className, isParent, setIsParent }) {
    const [validated, setValidated] = useState(false);
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            logIn();
        }
        setValidated(true);
    };

    const logIn = () => {
        fetch("http://localhost:3001/login", {
            method: "POST",
            body: JSON.stringify({
                email: emailRef.current["value"],
                password: passwordRef.current["value"]
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
        })
            .then((data) => data.json())
            .then((json) => console.log(JSON.stringify(json)));
    }

    const isParentChangeHandler = (event) => {
        setIsParent(event.target.checked);
    }

    return (
        <div className={className}>
            <InputGroup type="switch" name="switch_parent" label="Parent?" onChange={isParentChangeHandler} />
            <div className="text-center my-5">
                <h1>Login</h1>
                {isParent ?
                    <p>No account? <a href="/signup">Sign up</a></p>
                    : <p>No account? Ask a parent to create one for you.</p>}
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <InputGroup type="text" label={isParent ? "Email" : "What is your Oompa name?"} placeholder={isParent ? "email@domain.com" : "Woompa"} required ref={emailRef} />
                <InputGroup type="password" label={isParent ? "Password" : "What is your Oompa password?"} placeholder="********" required ref={passwordRef} />

                <div className="text-center my-5">
                    <Button type="submit">Log In</Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginForm;