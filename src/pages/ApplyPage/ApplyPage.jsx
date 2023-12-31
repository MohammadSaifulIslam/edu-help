import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../Others/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";
const ApplyPage = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate()

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

    const subjects = [
        "Software Engineering",
        "Information Technology",
        "Data Science",
        "Cybersecurity",
        "Artificial Intelligence",
        "Web Development",
        "Network Administration",
        "Database Management",
        "Mobile App Development",
        "Cloud Computing",
        "Marketing",
        "Finance",
        "International Business",
        "Human Resource Management",
        "Entrepreneurship",
        "Advertising and Public Relations",
        "Graphic Design",
        "Film Studies",
        "Music Theory",
        "Cultural Studies"
    ];

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const { name, birth_date, number, address, subject } = data

        const applyInfo = { name, birth_date, number, address, subject, email: user.email, college_name: college.collegeName, college_image: college.collegeImage, collegeId: college._id }

        console.log({ applyInfo })
        fetch('https://edu-help-server.vercel.app/apply-form', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Apply Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                    navigate('/my-college')
                }
            })
    }
    if (isLoading) {
        return <LoadingSpinner/>
    }

    return (
        <div className='my-container mt-10'>
            <form onSubmit={handleSubmit(onSubmit)} className="p-10 ">
                <h2 className="text-[#172F41] text-xl font-bold mb-5 text-center">Application Form</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <label className="">
                            <input type="text" {...register("name", { required: true })} placeholder='Jhon Smith' className='my-input' required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <label className="">
                            <input type="email" {...register("email", { required: true })} defaultValue={user?.email} className='my-input' />
                        </label>
                    </div>
                </div>



                <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <label className="">
                            <input type="number" {...register("number", { required: true })} placeholder="+8801******" className='my-input' required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <label className="">
                            <input type="date" {...register("birth_date", { required: true })} className='my-input' required />
                        </label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <label className="">
                            <input type="text" {...register("address", { required: true })} placeholder="Dhaka, Bangladesh" className='my-input' required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Photo</span>
                        </label>
                        <label className="">
                            <input type="file"  {...register("photo", { required: true })} className='' required />
                        </label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mt-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">University Name</span>
                        </label>
                        <label className="">
                            <input type="text" {...register("college_name", { required: true })} defaultValue={college.collegeName} placeholder={college.collegeName} className='my-input' />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Subject</span>
                        </label>
                        <label className="">
                            <select className='my-input' {...register("subject", { required: true })} >
                                {
                                    subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)
                                }
                            </select>
                        </label>
                    </div>
                </div>

                <button className='my-btn mt-10 mx-auto block'>Submit</button>

            </form>
        </div>
    );
};

export default ApplyPage;