
import { Link, NavLink } from "react-router-dom";
import UserAvater from "../../../components/UserAvater/UserAvater";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user } = useAuth()
    return (
        <section className=" bg-white py-1 relative border-b-2 border-primary">
            <nav className="my-container navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black text-lg font-semibold">
                            <li>
                                <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/colleges' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                    Colleges
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/admission' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                    Admission
                                </NavLink>
                            </li>
                            {
                                user &&
                                <li>
                                    <NavLink to='/my-college' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                        My College
                                    </NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="font-bold text-xl md:text-3xl" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Edu<span className='text-secondary'>Help</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 font-semibold">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/colleges' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                Colleges
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admission' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                Admission
                            </NavLink>
                        </li>
                        {
                            user &&
                            <li>
                                <NavLink to='/my-college' className={({ isActive }) => isActive ? 'text-secondary' : ''}>
                                    My College
                                </NavLink>
                            </li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <UserAvater />
                            :
                            <Link to={'/colleges'}><button className="my-btn">Get Started</button></Link>
                    }
                </div>
            </nav>
        </section>
    );
};

export default Navbar;