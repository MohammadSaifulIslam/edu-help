import Banner from "../Banner/Banner";
import Colleges from "../Colleges/Colleges";
import Gallery from "../Gallery/Gallery";
import ResearchPaper from "../ReseearchPaper/ResearchPaper";
import Review from "../Review/Review";

const Home = () => {
    return (
        <div className="mb-20">
            <Banner />
            <Colleges/>
            <Gallery/>
            <ResearchPaper/>
            <Review/>
        </div>
    );
};

export default Home;