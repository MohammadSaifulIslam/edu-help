import { useEffect, useState } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AdmissionPage = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <div className='my-container mt-20'>
            <SectionTitle title={'Admisssion Now'} />
            {/* college table */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th className='bg-primary'>
                                <label>
                                    No.
                                </label>
                            </th>
                            <th className='bg-primary'>Photo</th>
                            <th className='bg-primary'>College Name</th>
                            <th className='bg-primary'>Admission Date</th>
                            <th className='bg-primary'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            colleges.map((college, index) => <tr key={college._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="avatar w-12 h-12 mask mask-squircle">
                                        <img src={college.collegeImage} alt="College Image" />
                                    </div>
                                </td>
                                <td>
                                    {college.collegeName}
                                </td>
                                <td> <div className="flex gap-3 items-center mb-2"> <BsCalendarCheck className="w-5 h-5" /><span className="text-[#172F41]">{college.admissionDates?.fall}</span></div></td>
                                <th>
                                    <button className="my-btn ">Apply Now</button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdmissionPage;