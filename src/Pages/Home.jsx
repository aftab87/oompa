import FramedScreenshot from "Components/FramedScreenshot";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home(props) {
  // const isLoggedIn = true;
  // TODO: add consts to hold content for last section if loggedin
  const flex_center = "d-flex justify-content-center align-items-center"; // TODO: check if some styles can be grouped like this one
  return (
    <main className="home text-center">
      <section className="bg-primary welcome">
        <div className="container text-light">
          <div className="row">
            <div className={"col-12 col-md-8 flex-column p-5 pb-1 gap-2 " + flex_center}>
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

      <section className="screenshots mt-n5 mb-5">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-md-5 d-flex justify-content-center p-4">
              <FramedScreenshot path="images/screenshot1.jpg" altText="Dashoard View" />
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center mt-5 p-4">
              <FramedScreenshot path="images/screenshot1.jpg" altText="Dashoard View" />
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center p-4">
              <FramedScreenshot path="images/screenshot1.jpg" altText="Dashoard View" />
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
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-5 gap-2">
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
