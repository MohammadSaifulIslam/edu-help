import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Review.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import { useEffect, useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from "react-rating";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-container mt-20'>
            <SectionTitle title={"Student's Review"} subTitle={'Student Voices: Insightful Reviews and Testimonials. Hear from our passionate students as they share their transformative experiences, personal growth, and academic success stories. '} />
            <div >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review.id}>
                                <div className='p-5 mb-5'>
                                    <img src={review.student_image} alt="" className='img w-10 h-10 rounded-full' />
                                    <h3 className=' text-2xl font-bold mb-1'>{review.student_name}</h3>
                                    <h6 className='mb-5 text-xl font-medium'>About <span className='text-secondary'>{review.college_name}</span></h6>
                                    <Rating
                                        placeholderRating={review.rating}
                                        emptySymbol={<BsStar className='h-6 w-6' />}
                                        placeholderSymbol={<BsStarFill className='h-6 w-6 text-warning' />}
                                        fullSymbol={<BsStarFill className='h-6 w-6 text-warning' />}
                                        readonly
                                    />
                                    <p>{review.review}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Review;