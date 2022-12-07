import InputGroup from "Components/InputGroup";
import React, { useState, useRef } from "react";
import { Button, Form } from "react-bootstrap";




function SignUp() {
    
    const [validated, setValidated] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const appellationRef =useRef();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
           
            addParent(event);
        }

        setValidated(true);
    };

   function addParent() {
        fetch("http://localhost:3001/Parents", {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            isVerified: false,
            appellation: appellationRef.current.value,
          }),
          
          headers: {
            "Content-type": "application/json;charset=UTF-8",
          },
        })
          .then((data) => data.json())
          .then((json) => alert(JSON.stringify(json)));
          

      }

    return (
        <div className="container">
            <div className="text-center my-5">
                <h1>Sign Up</h1>
                <h3>Already have an account? Login</h3>
            </div>
            
            
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/*
                    <InputGroup type="text" label="Email" placeholder="email@domain.com" required pattern={/\w+[\w-.]*@\w+((-\w+)|(\w*))(\.[a-z]{2,3}){1,3}/} pattern_message="Please enter a valid E-mail" />
                    <InputGroup type="password" label="Password" placeholder="********" pattern={/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/} pattern_message="one lower case letter, one upper case letter, one digit, 6-13 length, and no spaces" />
                */}
                <InputGroup type="text" label="Email" placeholder="email@domain.com" required ref={emailRef} />
                <InputGroup type="password" label="Password" placeholder="********" required ref={passwordRef} />
                <InputGroup type="password" label="Confirm Password" placeholder="********"  />
                <InputGroup type="text" label="What do you want you kids to call you on Oompa?" placeholder="Daddy"  required ref={appellationRef} />

                <div className="text-center my-5">
                    <Button type="submit">Submit form</Button>
                </div>
            </Form>
        </div>
    );
}



export default SignUp;