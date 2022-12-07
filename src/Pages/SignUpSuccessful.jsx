import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUpSuccessful(props) {
  return (
    <main className="email-confirmation text-center">
      <section className="">
        <div className="container my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col">
              <h2>We sent you an email to confirm it!</h2>
              <p>Once confirmed, you will be able to log in and get them kids working!</p>

              <div className="text-center my-5">
                <Button as={Link} to="/login" variant="primary">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUpSuccessful;
