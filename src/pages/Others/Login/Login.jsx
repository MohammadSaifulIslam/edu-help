import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { loginUser } = useAuth()
    const {loginUser} = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const onSubmit = data => {
        setError(null)
        const { email, password } = data;
        loginUser(email, password)
            .then(() => {

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })
    };
    return (
        <section className='my-container my-20 '>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-5 rounded-xl shadow-xl  md:w-1/3 md:mx-auto px-5 py-10 border-2 border-primary'>
                <h4 className='text-priborder-primary text-2xl font-bold mb-5 text-center'>Login Form</h4>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="">
                        <input type="email" {...register("email", { required: true })} placeholder='example@gmail.com' className='my-input' required />
                        {errors.email && <span className="text-sm text-error">This field is required</span>}
                    </label>
                </div>
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label className="relative">
                        <input type={showPass ? 'text' : 'password'} {...register("password", { required: true })} placeholder='*******' className=' my-input mb-1' required />
                        <span>
                            {
                                !showPass ? <BsEye title='Show password' onClick={() => setShowPass(true)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></BsEye>
                                    : <BsEyeSlash title='Hide password' onClick={() => setShowPass(false)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></BsEyeSlash>
                            }
                        </span>
                        {errors.password && <span className="text-sm text-error">This field is required</span>}
                    </label>
                </div>
                <Link to='/reset-password' className=" btn-link text-error cursor-pointer normal-case" >Forgot password?</Link>
                <div className="form-control mt-4">
                    <label className="flex gap-4 cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="">Remember me</span>
                    </label>
                </div>
                <button className='my-btn w-full mt-5'>Login</button>
                <p className='text-error text-center mt-2'>{error}</p>
                <p className='text-center mt-2'>Don't have an account? <Link to='/register' className='text-priborder-primary underline'>Create an account</Link></p>
                {/* <SocialLogin /> */}
            </form>
        </section>
    );
};

export default Login;
