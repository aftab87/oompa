
import Footer from "Components/Footer";
import Header from "Components/Header";
import "Components/Stylesheets/Main.css"
import Data from "Assets/RawData/DevData";
import DevCard from 'Components/DevCard';


function Main() {
// need to look into tidying this up
    const cards = Data.map((card, index) => {
        return (
            <DevCard key={index}
                img={card.coverImg}
                title={card.title}
                description={card.description}
            />
        )
    })
    

    return (
        <div className="mainContainer">
            <Header />
            {cards}
            <Footer />
        </div>
    )
}

export default Main;   