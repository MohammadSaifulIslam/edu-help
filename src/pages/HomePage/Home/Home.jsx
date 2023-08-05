import Banner from "../Banner/Banner";
import Colleges from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ReseearchPaper/ResearchPaper";
import Review from "../Review/Review";
import Sponsors from "../Sponsors/Sponsors";
import SteepsToStart from "../StepsToStart/SteepsToStart";

const Home = () => {
    return (
        <div className="mb-20">
            <Banner />
            <Colleges/>
            <SteepsToStart/>
            <Gallery/>
            <ResearchPaper/>
            <Review/>
            <Sponsors/>
        </div>
    );
};

export default Home;