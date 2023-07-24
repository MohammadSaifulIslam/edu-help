
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Sponsors = () => {
    return (
        <section className="mt-20 relative" >
        {/* Background image */}
        <div
            className="bg-cover bg-center bg-fixed h-96 py-20 "
            style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367130.jpg?w=740&t=st=1690135886~exp=1690136486~hmac=9ef9018fdf24cd6b61bc1069a3c39a3b97315d1f762818b532b41526ce533ac4)' }}
        ></div>
        <div className="absolute inset-0 bg-primary opacity-40"></div>
        <div className="my-container absolute inset-0 text-white ">

            <SectionTitle title={'Gallery'} />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro odit commodi distinctio mollitia placeat quos voluptatibus et cupiditate quisquam rerum! Odit quam quas libero tenetur esse architecto unde iusto commodi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur facilis aut quaerat quidem aperiam sapiente, iste labore doloribus rem sequi itaque. Fugit consectetur minus laudantium totam delectus excepturi illum.</p>
        </div>
    </section>
    );
};

export default Sponsors;