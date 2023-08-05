
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import LoadingSpinner from '../Others/LoadingSpinner/LoadingSpinner';

const ResearchDetailsPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [paper, setPaper] = useState({})
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/research/${id}`)
            .then(res => res.json())
            .then(data => {
                setPaper(data)
                setIsLoading(false)
            })
    }, [id])
    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className='my-container mt-20'>
            <SectionTitle title={'Research Details'} subTitle={'There are some research paper links that were researched by the university students the website is recommending.'} />

            <div className='grid md:grid-cols-2 gap-5 items-center'>
                <figure className=''>
                    <img src={paper.image} alt="Research Paper Image" className="h-64 w-full object-cover rounded-lg" />
                </figure>
                <div >
                    <h4 className="mt-1 mb-4 text-xl font-semibold text-[#172F41]">{paper.research_title}</h4>
                    <div className='space-y-2'>
                        <p><span className="font-medium">Student Name: </span>{paper.student_name}</p>
                        <p> <span className="font-medium">College Name:</span> {paper.college_name}</p>
                        <p><span className="font-medium">Research Details:</span> {paper.research_details}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResearchDetailsPage;