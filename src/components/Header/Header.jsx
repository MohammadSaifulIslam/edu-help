import { BiLogIn, BiLogOut } from "react-icons/bi";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { RiFileUserLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import useAuth from "../../pages/hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
    }
    return (
        <section className="bg-[#172F41] text-white text-sm md:text-base">
            <div className="my-container py-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
                <div className="flex gap-4 ">
                    <div className="flex gap-2 items-center"><BsFillTelephoneForwardFill className="h-4 w-4" /> +01875-00001</div>
                    <div className="flex gap-2 items-center"><MdMarkEmailRead className="w-4 h-4" /> <span>edu@help.com</span></div>
                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className="flex gap-2 items-center"><BiLogOut className="w-5 h-5" /> <span>Logout</span></button>
                        :
                        <div className="flex gap-4">
                            <Link to={'/login'} className="flex gap-2 items-center"><BiLogIn className="h-5 w-5" /> Login</Link>
                            <Link to={'/register'} className="flex gap-2 items-center"><RiFileUserLine className="w-5 h-5" /> <span>Register</span></Link>
                        </div>
                }
            </div>
        </section>
    );
};

export default Header;