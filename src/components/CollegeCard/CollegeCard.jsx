import { BsArrowRight, BsCalendarCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    return (
        <div>
            <figure>
                <img className="w-full h-64 object-cover" src={college.collegeImage} alt="University Image" />
            </figure>
            <div className="mt-2">
                <div className="flex gap-3 items-center mb-2"> <BsCalendarCheck className="w-5 h-5" /><span className="text-[#172F41]">{college.admissionDates?.fall}</span></div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">{college.collegeName}</h3>
                <p><span className="font-medium"> Reseach History: </span>{college.researchHistory}</p>
                <Link to={`/college/${college._id}`} className="flex items-center gap-2 mt-2 font-medium hover:text-secondary duration-500 w-fit"> View Details <BsArrowRight className="w-5 h-5" /></Link>
            </div>
        </div>
    );
};

export default CollegeCard;