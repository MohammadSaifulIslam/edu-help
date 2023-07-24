
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useAuth from '../hooks/useAuth';

const MyCollegePage = () => {
    const { user } = useAuth()
    const [myColleges, setMyColleges] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/my-colleges/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyColleges(data))
    }, [user])
    return (
        <div className='mt-20 my-container'>
            <SectionTitle title={'My Applications'} />
            <p>My applications : {myColleges.length}</p>

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
                            <th className='bg-primary'>College Photo</th>
                            <th className='bg-primary'>College Name</th>
                            <th className='bg-primary'>Subject</th>
                            <th className='bg-primary'>Feedback</th>

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
                                    <Link to={`/apply-form/${college._id}`}><button className="my-btn ">Review</button></Link>
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

export default MyCollegePage;