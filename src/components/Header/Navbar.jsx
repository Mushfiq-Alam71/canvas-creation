import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <div className="flex flex-col lg:flex-row gap-4 z-10 list-none ">
        <li><NavLink to='/' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>Home</NavLink></li>
        <li><NavLink to='/allartcrafts' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>All Art & Crafts</NavLink></li>
        <li><NavLink to='/addCraft' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>Add Craft Item</NavLink></li>
        <li><NavLink to='/contactus' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>Contact Us</NavLink></li>
        <li><NavLink to='/aboutus' className={`btn hover:bg-[#4361EE4D] rounded-full text-lg`}>About</NavLink></li>
    </div>
    return (
        <div className="flex items-center justify-between mb-4 my-8">
            <div>logo</div>
            <div>{navLink}</div>
            <div>
                <NavLink to='/login' className="btn hover:bg-[#4361EE4D] rounded-full text-lg">Login</NavLink>
                <NavLink to='/register' className="btn hover:bg-[#4361EE4D] rounded-full text-lg">Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;