import { useEffect, useState } from "react";
import CollegeCard from "../../../components/CollegeCard/CollegeCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('https://edu-help-server.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    
    return (
        <section className="my-container mt-20 ">
            <SectionTitle title={'Browse University'} subTitle={'Discover the perfect fit for your future among top universities and unlock a world of opportunities.'} />

            <div className="grid md:grid-cols-3 gap-5">
                {
                    colleges.slice(0, 3).map(college =>
                        <CollegeCard key={college._id} college={college}>               </CollegeCard>)
                }
            </div>
        </section>
    );
};

export default Colleges;