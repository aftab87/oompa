import InputGroup from "Components/InputGroup";
import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { userContext } from "../../App";

function LoginForm({ className, isParent, setIsParent }) {
  const [user, setUser] = useContext(userContext);

  const [validated, setValidated] = useState(false);
  const [dbError, setDbError] = useState(null) // For the alert in case of an error
  const [busy, setBusy] = useState(false) // Busy if already sent a request to login

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true && !busy) {
      logIn();
    }
    setValidated(true);
  };

  const saveToContext = (user) => {
    setUser(user)
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  const logIn = () => {
    setBusy(true)
    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current["value"],
        password: passwordRef.current["value"],
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        setBusy(false)
        if (json.success === true) {
          console.log("successful", JSON.stringify(json.user))
          saveToContext(json.user)
          navigate('/dashboard')
        } else {
          console.log("unsuccessful", json)
          setDbError(json.msg)
        }
      });
  };

  const isParentChangeHandler = (event) => {
    setIsParent(event.target.checked);
  };

  return (
    <div className={className}>
      <InputGroup type="switch" className="text-start" name="switch_parent" label="Parent?" onChange={isParentChangeHandler} />
      <div className="text-center m-3">
        <h1>Login</h1>
        {isParent ? (
          <p>
            No account? <a href="/signup">Sign up</a>
          </p>
        ) : (
          <p>No account? Ask a parent to create one for you.</p>
        )}
      </div>
      <Form className="text-start" noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup type="text" label={isParent ? "Email" : "Oompa name"} placeholder={isParent ? "email@domain.com" : "Woompa"} required ref={emailRef} clear_error={setDbError} />
        <InputGroup type="password" label={isParent ? "Password" : "Oompa password"} placeholder="********" required ref={passwordRef} clear_error={setDbError} />

        {dbError && <p className="alert alert-danger text-center">{dbError}</p>}

        <div className="text-center my-5">
          <Button type="submit">Log In</Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
