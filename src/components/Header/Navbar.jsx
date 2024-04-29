import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLink = <div className="flex flex-col lg:flex-row gap-4 z-10 list-none ">
        <li><NavLink to='/' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>Home</NavLink></li>
        <li><NavLink to='/allartcrafts' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>All Art & Crafts</NavLink></li>
        <li><NavLink to='/addCraft' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>Add Craft Item</NavLink></li>
        <li><NavLink to='/myartcrafts' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>My Art & Crafts</NavLink></li>
        <li><NavLink to='/contactus' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>Contact Us</NavLink></li>
        <li><NavLink to='/aboutus' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>About</NavLink></li>
    </div>
    return (
        <div className="flex items-center justify-between mb-4 my-8">
            <Link to='/'>
                <h1 className="btn font-bold text-2xl ml-8">Logo</h1>
            </Link>
            <div>{navLink}</div>
            <div>
                {user ? (
                    <div className="flex items-center">
                        <Link to='/userprofile' tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2 pt-1 pl-1 tooltip" data-tip={user.displayName}>
                            <div className="w-11 rounded-full">
                                <img alt="user photo" className="" src={user.photoURL} />
                            </div>
                        </Link>
                        <button onClick={handleSignOut} className="btn hover:bg-[#4361EE4D] rounded-full text-lg">Sign Out</button>
                    </div>
                ) : (
                    <>
                        <Link to='/login' className="btn hover:bg-[#4361EE4D] rounded-full text-lg">Login</Link>
                        <Link to='/register' className="btn hover:bg-[#4361EE4D] rounded-full text-lg">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;