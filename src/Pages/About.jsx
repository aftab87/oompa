import React from "react";
import Data from "Assets/RawData/DevData";
import DevCard from 'Components/DevCard';

function About(props) {
  
  const cards = function () {
    return Data.map((card, index) => {
        return (
            <DevCard key={index}
                img={card.coverImg}
                title={card.title}
                description={card.description}
            />
        )
    })
}

  return (
    <div>
      <h1> This is the About Page</h1>
            {cards()}
    </div>
  );
}

export default About;
