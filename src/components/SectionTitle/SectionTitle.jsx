
const SectionTitle = ({title, subTitle }) => {
    return (
        <div className="text-center md:w-2/3 lg:w-1/2 mx-auto mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">{title}</h2>
        <p className=" text-gray-500">{subTitle}</p>
    </div>

    );
};

export default SectionTitle;