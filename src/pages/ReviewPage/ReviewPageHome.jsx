import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LoadingSpinner from "../Others/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const ReviewPageHome = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const [admissionInfo, setAdmissionInfo] = useState({});
    const navigate = useNavigate()



    useEffect(() => {
        fetch(`https://edu-help-server.vercel.app/admission/${id}`)
            .then(res => res.json())
            .then(data => {
                setAdmissionInfo(data)
                setIsLoading(false)
            })
    }, [id])
    console.log(admissionInfo)

    const handleReview = () => {
        event.preventDefault()
        const review = event.target.review.value

        const feedback = { rating: rating, review, student_name: admissionInfo.name, college_name: admissionInfo.college_name, student_image: user.photoURL, time: new Date() }
        console.log(feedback)

        axios.post('https://edu-help-server.vercel.app/reviews', feedback)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Review Submited',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                
            })
            event.target.reset();
            navigate('/')
    }


    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="my-container mt-20">
            <SectionTitle title={'Review Your University'} />

            <form onSubmit={handleReview} className="p-10 rounded-lg border-2 border-secondary w-full md:max-w-md mx-auto">
                <div className="mb-5">
                    <label htmlFor="" className="font-medium">Your Rating</label>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        isRequired={true}
                    />
                </div>
                <div>
                    <label htmlFor="" className="font-medium">Your Opinion</label>
                    <textarea type="text" name="review" className="my-input mt-2 h-40" placeholder="Write about your University" required />
                </div>
                <button className="my-btn text-sm mt-5">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewPageHome;