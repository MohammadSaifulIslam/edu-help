import { BallTriangle } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <div className="h-[calc(100vh-90px)] w-full flex justify-center items-center z-30">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#E32845"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default LoadingSpinner;