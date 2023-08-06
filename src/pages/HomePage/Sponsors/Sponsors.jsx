
import sponser1 from '../../../assets/sponsers/sponser (1).png'
import sponser2 from '../../../assets/sponsers/sponser (2).png'
import sponser3 from '../../../assets/sponsers/sponser (3).png'
import sponser4 from '../../../assets/sponsers/sponser (4).png'
import sponser5 from '../../../assets/sponsers/sponser (5).png'
const Sponsors = () => {
    return (
        <section className="my-container mt-20 grid grid-cols-5 items-center gap-4" >
            <div>
                <img src={sponser1} alt="sponsers' company logo" />
            </div>
            <div>
                <img src={sponser2} alt="sponsers' company logo" />
            </div>
            <div>
                <img src={sponser3} alt="sponsers' company logo" />
            </div>
            <div>
                <img src={sponser4} alt="sponsers' company logo" />
            </div>
            <div>
                <img src={sponser5} alt="sponsers' company logo" />
            </div>
        </section>
    );
};

export default Sponsors;