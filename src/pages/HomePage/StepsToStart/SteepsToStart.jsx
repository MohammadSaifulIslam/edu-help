import { AiOutlineFileSearch } from 'react-icons/ai';
import { BiBookReader, BiSelectMultiple } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const SteepsToStart = () => {
    return (
        <section className="mt-20 my-container">
            <SectionTitle title={'Steps To Start'} subTitle={"Embarking on a new application can be both exciting and overwhelming, especially if you're unsure where to begin."}/>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-10 border-2 border-gray-400 hover:-translate-y-3 duration-500 hover:border-secondary group">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center group-hover:bg-secondary duration-500'>
                        <AiOutlineFileSearch  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary group-hover:text-secondary duration-500'>Querist</h4>
                    <p className=''>Embark on your application journey by seeking information and clarifying any doubts you may have.</p>
                </div>
                <div className="p-10 border border-gray-400 hover:-translate-y-3 duration-500 hover:border-secondary group">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center group-hover:bg-secondary duration-500'>
                        <BiSelectMultiple  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary group-hover:text-secondary duration-500'>Choose</h4>
                    <p className=''>Explore a range of options and select the program or service that best aligns with your needs and aspirations.</p>
                </div>
                <div className="p-10 border border-gray-400 hover:-translate-y-3 duration-500 hover:border-secondary group">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center group-hover:bg-secondary duration-500'>
                        <HiOutlineDocumentText  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary group-hover:text-secondary duration-500'>Enroll</h4>
                    <p className=''>Complete the registration process by providing essential details, ensuring a seamless transition into the application.</p>
                </div>
                <div className="p-10 border border-gray-400 hover:-translate-y-3 duration-500 hover:border-secondary group">
                    <div  className='w-20 h-20 mask rounded-full bg-primary flex justify-center items-center group-hover:bg-secondary duration-500'>
                        <BiBookReader  className='w-10 h-10 text-white'/>
                    </div>
                    <h4 className='mt-5 text-2xl font-bold text-primary group-hover:text-secondary duration-500'>Start</h4>
                    <p className=''>Take the first step towards your goals as you initiate the application and experience the convenience.</p>
                </div>

            </div>
        </section>
    );
};

export default SteepsToStart;