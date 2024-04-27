import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../Header/Navbar";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {

    useEffect(() => {
        document.title = "Login";
    }, [])
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state ? location.state : '/';

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // sign In
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate after login
                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-center text-3xl font-semibold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-outline">Login</button>
                            </div>
                            <p>Don&#39;t have an accout? please <NavLink className='text-blue-500 hover:underline font-semibold' to='/register'>Register</NavLink></p>
                        </form>
                        <div className="mb-6">
                            <SocialLogin from={from}></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;