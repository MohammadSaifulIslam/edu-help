
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ResearchPaperCard = ({ paper,isButton }) => {
    return (
        <div>
            <figure>
                <img src={paper.image} alt="Research Paper Image" className="h-64 w-full object-cover" />
            </figure>
            <div>
                <h4 className="mt-1 mb-2 text-xl font-semibold text-[#172F41]">{paper.research_title}</h4>
                <p><span className="font-medium">Student Name: </span>{paper.student_name}</p>
                <p> <span className="font-medium">College Name:</span> {paper.college_name}</p>
                <p><span className="font-medium">Research Details:</span> {paper.research_details.slice(0, 110)}...</p>
                {
                    isButton && 
                    <Link to={`/research/${paper._id}`} className="font-medium mt-2 flex items-center gap-2 text-[#E32845] hover:text-[#172F41] duration-300">Go To Page <BsArrowRight className="w-5 h-5"/></Link>
                }
            </div>
        </div>
    );
};

export default ResearchPaperCard;