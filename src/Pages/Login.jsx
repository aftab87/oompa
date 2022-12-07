import LoginForm from "Components/Forms/LoginForm";
import FramedScreenshot from "Components/FramedScreenshot";
import InformationBubble from "Components/InformationBubble";
import ResponsiveContainer from "Components/ResponsiveContainer";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
  const [isParent, setIsParent] = useState(false);
  const flex_center = "d-flex justify-content-center align-items-center";

  return (
    <main className="login text-center">
      <section className="login">
        <div className="container">
          <div className={"row justify-content-center "}>
            <div className={"col-12 col-md-6 flex-column py-5 pb-1 gap-2 " + flex_center}>
              <LoginForm className="container" isParent={isParent} setIsParent={setIsParent} />
            </div>
            <div className="col-12 col-md-6">
              {isParent ? (
                <InformationBubble
                  title="Did you know?"
                  text="You can also login via the Kids form. However the forgot password link is only available on this login form."
                  src="./images/FancyBubble.svg"
                />
              ) : (
                <div className="text-center">
                  <img className="w-auto flipX illustration" src="images/illustration4.svg" alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary cta pt-5">
        <div className="container text-light">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img className="mb-n5 illustration" src="images/illustration2.svg" alt="" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-5 gap-2">
              {isParent ? (
                <div className="p-5 gap-2">
                  <h2>Kids Accounts?</h2>
                  <p className="">You can create accounts for your kids via your dashboard if you already have an account or Sign up first.</p>
                  <Button as={Link} variant="dark" className="m-2" to="/signup">
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div className="p-5 gap-2 text-center">
                  <h2>Did you forget your Oompa name or Secret password?</h2>
                  <p className="">Ask a parent to come to your rescue!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
