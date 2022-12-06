import React from "react";

function Home(props) {
  return (
    <div className="bg-primary">
      <div className="container text-light home-welcome">
        <div className="row">
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center p-5 pb-1">
            <h1>Welcome to Oompa!</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <img className="mb-n5" src="images/illustration1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
