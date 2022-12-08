import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InputGroup from "Components/InputGroup";
import { Button, Form } from "react-bootstrap";
import { userContext } from "App";


function SignUpForm(props) {

  const [validated, setValidated] = useState(false);
  const [dbError, setDbError] = useState(null) // For the alert in case of an error
  const [password, setPassword] = useState(null)
  const [busy, setBusy] = useState(false) // Busy if already sent a request to register
  const [user] = useContext(userContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const appellationRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true && !busy) {
      save();
    }
    setValidated(true);
  };
  //FIXME: Default avatar
  const save = () => {
    setBusy(true)
    fetch("http://localhost:3001/Parents", {
      method: props.edit ? "PUT" : "POST",
      body: JSON.stringify({
        email: emailRef.current["value"],
        password: passwordRef.current["value"],
        isVerified: false,
        avatar_uid: "100",
        appellation: appellationRef.current["value"],
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then(data => data.json())
      .then(json => {
        setBusy(false)
        if (json.success)
          navigate('/login?newUser')
        else {
          setDbError(json.msg)
        }
      })
      .catch(err => {
        console.log('error', err)
        setBusy(false)
      })
  }


  return (
    <main className="signup text-center">
      <section className="form">
        <div className="container my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col col-lg-6">
              <h2>{props.edit ? "Account Settings" : "Sign Up"}</h2>
              {!props.edit && <p>
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>}

              <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
                {/*
                    <InputGroup type="text" label="Email" placeholder="email@domain.com" required pattern={/\w+[\w-.]*@\w+((-\w+)|(\w*))(\.[a-z]{2,3}){1,3}/} pattern_message="Please enter a valid E-mail" />
                    <InputGroup type="password" label="Password" placeholder="********" pattern={/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/} pattern_message="one lower case letter, one upper case letter, one digit, 6-13 length, and no spaces" />
                */}
                {!props.edit && <InputGroup type="text" label="Email" placeholder="email@domain.com" required ref={emailRef} clear_error={setDbError} defaultValue={props.edit ? user.email : ""} />}
                <InputGroup type="password" label="Password" placeholder="********" required ref={passwordRef} clear_error={setDbError} set_password={setPassword} />
                <InputGroup type="password" label="Confirm Password" placeholder="********" required clear_error={setDbError} password={password} />
                <InputGroup type="text" label={"What do you want you kids to call you on Oompa" + (props.edit ? " now?" : "?")} placeholder="Daddy" required ref={appellationRef} clear_error={setDbError} />

                {dbError && <p className="alert alert-danger text-center">{dbError}</p>}

                <div className="text-center my-5">
                  <Button type="submit">Sign Up</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpForm;
