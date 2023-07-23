
const Banner = () => {
    return (
        <section className="relative">
            {/* Background image */}
            <div
                className="bg-cover bg-center h-[calc(100vh-88px)]"
                style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?w=740&t=st=1690124085~exp=1690124685~hmac=1e7e2abad811d0628f34bf7728153487533fcbc314efe43350793245e979d14f)' }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradiant"></div>


                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center my-container">
                    <div className="text-white ">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                            Welcome to EduHelp & <br />
                            Your Path to Success!
                        </h1>
                        <p className="mt-5 lg:w-3/5 text-lg md:text-xl xl:text-2xl">
                            Empowering Your Academic Journey: Welcome to EduHelp! Navigate the path to success with our expert guidance and resources.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
