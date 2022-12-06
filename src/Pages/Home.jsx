import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home(props) {
  const isLoggedIn = true;
  return (
    <main className="home text-center">
      <section className="bg-primary welcome">
        <div className="container text-light">
          <div className="row">
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center p-5 pb-1 gap-2">
              <h1>Welcome to Oompa!</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
              </p>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <img className="mb-n5" src="images/illustration1.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="screenshots">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="drop-shadow rounded-5">
                <img className="m-4" src="images/screenshot1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img className="mb-n5" src="images/illustration2.svg" alt="" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-5 pb-1 gap-2">
              <h2>Do you have an Oompa Account?!</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
              </p>
              <Button as={Link} variant="primary" className="m-2" to="/signup">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
