import { Link } from 'react-router-dom';
import useAuth from '../../pages/hooks/useAuth';
import './UserAvater.css';
const UserAvater = () => {
    const { user } = useAuth()
    return (
        <div>
            {
                user ?
                    <figure className="hover-text h-14 w-14 ml-4 cursor-pointer">
                        <img className='w-full h-full rounded-full' src={user?.photoURL} alt="user photo" />
                        <span className="tooltip-text" id="left">{user?.displayName}</span>
                    </figure>
                    :
                    <Link to='/login' className='hidden md:block'><button className='my-btn'>Login</button></Link>
            }
        </div>
    );
};

export default UserAvater;