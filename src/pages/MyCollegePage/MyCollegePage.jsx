
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import LoadingSpinner from '../Others/LoadingSpinner/LoadingSpinner';
import useAuth from '../hooks/useAuth';

const MyCollegePage = () => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const [myColleges, setMyColleges] = useState([]);
    useEffect(() => {
        fetch(`https://edu-help-server.vercel.app/my-colleges/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyColleges(data)
                setIsLoading(false)
            })
    }, [user])
    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className='mt-20 my-container'>
            <SectionTitle title={'My Applications'} />

            {/* college table */}
            {
                myColleges.length === 0 ?
                    <div className='h-40 text-center'>
                        <h5 className='text-xl font-bold mb-5'>You haven't applied to any University yet. To apply</h5>
                        <Link to={'/colleges'} className='my-btn text-sm'>Browse University</Link>
                    </div>
                    :
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr className='text-white'>
                                    <th className='bg-[#172F41]'>
                                        <label>
                                            No.
                                        </label>
                                    </th>
                                    <th className='bg-[#172F41]'>College Photo</th>
                                    <th className='bg-[#172F41]'>College Name</th>
                                    <th className='bg-[#172F41]'>Subject</th>
                                    <th className='bg-[#172F41]'>Feedback</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {

                                    myColleges.map((college, index) => <tr key={college._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="avatar w-12 h-12 mask mask-squircle">
                                                <img src={college.college_image} alt="College Image" />
                                            </div>
                                        </td>
                                        <td>
                                            {college.college_name}
                                        </td>
                                        <td>{college.subject}</td>
                                        <th>
                                            <Link><button className="my-btn ">Review</button></Link>
                                        </th>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default MyCollegePage;