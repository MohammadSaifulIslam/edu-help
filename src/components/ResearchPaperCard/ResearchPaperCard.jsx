
import { BsArrowRight } from "react-icons/bs";
const ResearchPaperCard = ({ paper }) => {
    return (
        <div>
            <figure>
                <img src={paper.image} alt="Research Paper Image" className="h-64 w-full object-cover" />
            </figure>
            <div>
                <h4 className="mt-1 mb-2 text-xl font-semibold text-primary">{paper.research_title}</h4>
                <p><span className="font-medium">Student Name: </span>{paper.student_name}</p>
                <p> <span className="font-medium">College Name:</span> {paper.college_name}</p>
                <p><span className="font-medium">Research Details:</span> {paper.research_details.slice(0, 110)}...</p>
                <a href="#" className="font-medium mt-2 flex items-center gap-2 text-secondary hover:text-primary duration-300">Go To Page <BsArrowRight className="w-5 h-5"/></a>
            </div>
        </div>
    );
};

export default ResearchPaperCard;