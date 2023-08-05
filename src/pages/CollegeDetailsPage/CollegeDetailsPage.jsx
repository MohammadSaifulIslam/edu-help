import { useEffect, useState } from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LoadingSpinner from "../Others/LoadingSpinner/LoadingSpinner";

const CollegeDetailsPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [college, setCollege] = useState({});
    useEffect(() => {
        fetch(`https://edu-help-server.vercel.app/colleges/${id}`)
            .then(res => res.json())
            .then(data => {
                setCollege(data)
                setIsLoading(false)
            })
    }, [id])
    const { collegeImage, collegeName, admissionProcess, admissionDates, researchHistory
        , researchWorks, eventsDetails,sportsCategories ,_id} = college;

    if (isLoading) {
        return <LoadingSpinner/>
    }
    return (
        <div className="mt-20 my-container">
            <SectionTitle title={'University Details'} />
            <div>
                <div className="grid md:grid-cols-2 gap-5">
                    <figure>
                        <img src={collegeImage} alt="University Photo" className="rounded-xl md:h-[400px]  w-full object-cover" />
                    </figure>
                    <div>
                        <h2 className="text-3xl font-bold text-[#E32845] mb-5">{collegeName}</h2>
                        <p className="flex gap-3 items-center font-medium mb-2"> <BsCalendarCheck className="w-5 h-5" /> Admission Period: </p>
                        <ul className="text-sm">
                            <li> <div className="flex items-center mb-2 gap-2"> <span>Spring:</span><span className="text-[#E32845]">{admissionDates?.spring}</span></div></li>
                            <li> <div className="flex items-center mb-2 gap-2"> <span>Summer:</span><span className="text-[#E32845]">{admissionDates?.summer}</span></div></li>
                            <li> <div className="flex items-center mb-2 gap-2"> <span>Fall:</span><span className="text-[#E32845]">{admissionDates?.fall}</span></div></li>
                        </ul>
                        <p className="mt-4"><span className="font-medium mt-4">Admission Proccess</span> {admissionProcess}</p>
                        <p className="mt-2"><span className="font-medium ">Research History</span> {researchHistory}</p>
                        <div className="mt-2"><span className="font-medium ">Sports Facility: </span> {sportsCategories.map((sport,index)=><span key={index}>{sport}, </span>)}</div>
                        
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    <div>
                        <h4 className="text-[#E32845] text-3xl font-bold text-center mb-5">Our Research Works</h4>
                        {
                            researchWorks.map((work, index) => <div key={index} className="p-5 rounded-md shadow-lg mb-5">
                                <h5 className="text-xl text-[#172F41] mb-4"><span className="font-medium text-[#E32845]">Title: </span> {work.title}</h5>
                                <div className="flex gap-3 items-center my-2"> <BsCalendarCheck className="w-5 h-5" /><span className="text-[#172F41]">{work.publicationDate}</span></div>
                                <div><span className="font-medium text-[#E32845]">Author: </span> {work.authors.map((author, index) => <span key={index}>{author ? author : ''}, </span>)}</div>
                                <p><span className="font-medium text-[#E32845]">Abstract:</span> {work.abstract}</p>
                            </div>)
                        }
                    </div>
                    <div>
                        <h4 className="text-[#E32845] text-3xl font-bold text-center mb-5">Event Details</h4>
                        <ul>
                            {Object.entries(eventsDetails).map(([event, description]) => (
                                <li key={event} className="p-5 rounded-md shadow-lg mb-5">
                                    <span className="text-[#E32845] font-medium">{event}:</span> {description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center">
            <Link to={`/apply-form/${_id}`}><button className="my-btn mt-5" >Apply Now</button></Link>
            </div>
        </div>
    );
};

export default CollegeDetailsPage;