import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import saveUser from '../../../apis/auth/auth';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const { photoURL, email, displayName, } = result.user;
                const userInformation = { photo: photoURL, name: displayName, email }
                saveUser(email, userInformation)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(err => {

                console.log(err)
            })
    }
    return (
        <>

            <div className="divider">Or</div>
            <div onClick={handleGoogleLogin} className='my-btn w-fit mx-auto flex justify-center items-center gap-4'>
                <FaGoogle></FaGoogle>Google
            </div>
        </>
    );
};

export default SocialLogin;