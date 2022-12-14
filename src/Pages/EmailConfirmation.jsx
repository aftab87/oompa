import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EmailConfirmation(props) {
  
  return (
    <main className="email-confirmation text-center">
      <section className="">
        <div className="container my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col">
              <h2>Thank you for getting in touch!</h2>
              <p>We will get back to you as soon as possible!</p>

              <div className="text-center my-5">
                <Button as={Link} to="/" variant="primary">
                  Go Back to home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EmailConfirmation;
