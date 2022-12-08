import React from "react";
import Data from "Assets/RawData/DevData";
import DevCard from "Components/DevCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../Components/Forms/ContactForm";

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
              <h1>About Oompa!</h1>
              <p className="">
                A team of four super heroes met one day to solve a huge problem: getting children to finish their missions (chores)! A common problem for all parents, the idea behind Oompa is to have children complete their missions on their own. We wanted something fun and engaging for kids, but how to do that with something as dreaded as chores? Through our application, parents will create missions and children will complete them, and have fun doing it! The parents will create missions that they want completed by a set time for that day, and it will be up to the child to complete it. If they do, the children can collect stars, with enough stars, they can purchase whichever reward the parents decide to make available for them! The parents save time and the children get to learn valuable skills while having fun!
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
            <div className={"col-12 pt-5 gap-2 flex-column " + flex_center}>
              <h2>About Phenomenal JAZ</h2>
              <p className="text-start">
                <b>Patrick Loutfi, The infinity Inventor:</b> Came up with the idea of a chore tracker for kids during a brainstorming sessions with team Oompa. Worked on client and server side, assisting the team where he was required.<br />
                <b>Julieta Gueorguiva, The Design Princess:</b> Designed and styled the entire application from the ground up, using her knowledge and experience to make Oompa look the way it does now.<br />
                <b>Aftab Safdar, The Coding Genie:</b> Using his magical coding powers to implement the enormous task of putting the business logic of Oompa into code. Aftab was able to make sure everything was functioning on the client and server side.<br />
                <b>Zachary Clarke, The Database Assassin:</b> Slayed all database issues we had with Mangodb, created most CRUD application and assured everything worked smoothly between front and back end.
              </p>
            </div>
            <div className="row g-5 mt-0">{cards()}</div>
          </div>
        </div>
      </section>

      <section className="contact pt-5">
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center">
              <img className="mb-n5 img-fluid" src="images/illustration4.svg" alt="" />
            </div>
            <div className="col-12 col-md-8 col-lg-6 d-flex flex-column justify-content-center align-items-center p-5 gap-2">
              <h2>Get in Toutch!</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
