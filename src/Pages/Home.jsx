import React, { useEffect, useContext } from "react";
import FramedScreenshot from "Components/FramedScreenshot";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { userContext } from "App";

function Home(props) {
  const [user, setUser] = useContext(userContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  useEffect(() => {
    if (searchParams.get("logout")) {
      setUser(null);
      sessionStorage.clear()
      navigate("/")
    }
  }, [navigate, searchParams, setUser, user]);

  const ctaTitle = user ? "Explore Your Dashboard" : "Are you a parent? Get started here!";
  const ctaButtonLabel = user ? "Dashboard" : "Sign Up";
  const ctaButtonLink = user ? "/dashboard" : "/signup";
  const ctaText = user
    ? "You can do a lot in your dashboard"
    : " Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris";
  const flex_center = "d-flex justify-content-center align-items-center";
  return (
    <main className="home text-center">
      <section className="bg-primary welcome">
        <div className="container text-light">
          <div className="row">
            <div className={"col-12 col-md-8 flex-column p-5 pb-1 gap-2 " + flex_center}>
              <h1>Welcome {user ? user.username : "to Oompa"}!</h1>
              <p className="">
                A fun and interactive web application design to help kids manage their chores and save time for parents!!!
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
              <h2>{ctaTitle}</h2>
              <p className="">{ctaText}</p>
              <Button as={Link} to={ctaButtonLink} variant="primary" className="m-2">
                {ctaButtonLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
