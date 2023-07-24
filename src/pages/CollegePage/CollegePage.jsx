import { useEffect, useState } from "react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const CollegePage = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('/colleges.json')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    
    return (
        <div className="my-container mt-20">
            <SectionTitle title={'Choose Your University'} subTitle={'Discover the perfect fit for your future among top universities and unlock a world of opportunities.'}/>

            <div className="grid md:grid-cols-3 gap-5">
                {
                    colleges.map(college =>
                        <CollegeCard key={college.id} college={college}>               </CollegeCard>)
                }
            </div>
        </div>
    );
};

export default CollegePage;