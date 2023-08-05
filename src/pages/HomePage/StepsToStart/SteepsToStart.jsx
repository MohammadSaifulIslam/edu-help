import { AiOutlineFileSearch } from 'react-icons/ai';
import { BiBookReader, BiSelectMultiple } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const SteepsToStart = () => {
    return (
        <section className="mt-20 my-container">
            <SectionTitle title={'Steps To Start'} subTitle={"Embarking on a new application can be both exciting and overwhelming, especially if you're unsure where to begin."}/>

            <div className="grid md:grid-cols-4 gap-4">
                <div className="p-10 border border-gray-400 ">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center'>
                        <AiOutlineFileSearch  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary'>Querist</h4>
                    <p className=''>Embark on your application journey by seeking information and clarifying any doubts you may have.</p>
                </div>
                <div className="p-10 border border-gray-400 ">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center'>
                        <BiSelectMultiple  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary'>Choose</h4>
                    <p className=''>Explore a range of options and select the program or service that best aligns with your needs and aspirations.</p>
                </div>
                <div className="p-10 border border-gray-400 ">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center'>
                        <HiOutlineDocumentText  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary'>Enroll</h4>
                    <p className=''>Complete the registration process by providing essential details, ensuring a seamless transition into the application.</p>
                </div>
                <div className="p-10 border border-gray-400 ">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center'>
                        <BiBookReader  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary'>Start</h4>
                    <p className=''>Take the first step towards your goals as you initiate the application and experience the convenience.</p>
                </div>

            </div>
        </section>
    );
};

export default SteepsToStart;