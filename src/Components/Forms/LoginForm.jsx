import InputGroup from "Components/InputGroup";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm({ className, isParent, setIsParent}) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            //Log in
        }

        setValidated(true);
    };

    const isParentChangeHandler = (event) => {
        setIsParent(event.target.checked);
    }

    return (
        <div className={className}>
            <InputGroup type="switch" name="switch_parent" label="Parent?" onChange={isParentChangeHandler}/>
            <div className="text-center my-5">
                <h1>Login</h1>
                {isParent ?
                    <p>No account? <a href="/signup">Sign up</a></p>
                    : <p>No account? Ask a parent to create one for you.</p>}
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <InputGroup type="text" label={isParent ? "Email" : "What is your Oompa name?"} placeholder={isParent ? "email@domain.com" : "Woompa"} required />
                <InputGroup type="password" label={isParent ? "Password" : "What is your Oompa password?"} placeholder="********" required />

                <div className="text-center my-5">
                    <Button type="submit">Log In</Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginForm;