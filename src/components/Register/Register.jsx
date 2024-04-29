import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../Header/Navbar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    useEffect(() => {
        document.title = "Register";
    }, [])

    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // reset error
        setRegisterError('');
        setRegisterSuccess('');

        if (password.length < 6) {
            setRegisterError(toast.error('Password must be at least 6 characters or longer'));
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError(toast.error('Password must contain a upper case letter!'));
            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError(toast.error('Password must contain a lower case letter!'));
            return;
        }

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                });
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt };
                fetch('https://b9-a-assignment-10-server-theta.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                setRegisterSuccess(toast.success('User created successfully!'));
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[60vh] bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-center text-3xl font-semibold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Enter name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : "password"}
                                        placeholder="password"
                                        name='password'
                                        className="input input-bordered w-full"
                                        required />
                                    <span className="absolute top-4 right-4 text-base" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-outline">Register</button>
                                <ToastContainer />
                            </div>
                            <p>Already have an accout? please <NavLink className='text-blue-500 hover:underline font-semibold' to='/login'>Login</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register; 