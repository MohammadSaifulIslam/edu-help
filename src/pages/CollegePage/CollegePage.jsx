import { useEffect, useState } from "react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LoadingSpinner from "../Others/LoadingSpinner/LoadingSpinner";

const CollegePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('https://edu-help-server.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {setColleges(data)
            setIsLoading(false)})
    }, [])
    
    if(isLoading){
        return <LoadingSpinner/>
    }
    return (
        <div className="my-container mt-20">
            <SectionTitle title={'Choose Your University'} subTitle={'Discover the perfect fit for your future among top universities and unlock a world of opportunities.'}/>

            <div className="grid md:grid-cols-3 gap-5">
                {
                    colleges.map(college =>
                        <CollegeCard key={college._id} college={college}>               </CollegeCard>)
                }
            </div>
        </div>
    );
};

export default CollegePage;