import React from "react";
import Data from "Assets/RawData/DevData";
import DevCard from "Components/DevCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function About(props) {
  const flex_center = " d-flex justify-content-center align-items-center ";
  const team_card_col = " col-12 col-md-6 col-lg-3 ";
  const cards = function () {
    return Data.map((card, index) => {
      return <DevCard key={index} img={card.coverImg} title={card.title} description={card.description} />;
    });
  };

  return (
    <main className="about text-center">
      <section className="bg-primary welcome">
        <div className="container text-light">
          <div className="row">
            <div className={"col-12 col-md-8 flex-column p-5 pb-1 gap-2 " + flex_center}>
              <h1>About Oompa</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum. Maecenas vitae mattis tellus. Nullam quis
                imperdiet augue. Vestibulum. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
              </p>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <img className="mb-n5" src="images/illustration3.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="team py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className={"col-12 p-5 gap-2 flex-column " + flex_center}>
              <h2>About Phenomenal JAZ</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
              </p>
            </div>
            <div className="row gx-5">{cards()}</div>
          </div>
        </div>
      </section>

      <section className="contact pt-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center">
              <img className="mb-n5 img-fluid" src="images/illustration4.svg" alt="" />
            </div>
            <div className="col-12 col-md-8 col-lg-6 bg-warning d-flex flex-column justify-content-center align-items-center p-5 gap-2">
              <h2>Get in Toutch!</h2>
              <p className="">[form]</p>
              <Button variant="primary" className="m-2">
                Send
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
