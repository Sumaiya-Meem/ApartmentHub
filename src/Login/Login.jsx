import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ContextProvider } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import bg from "../../public/bg1.avif";

const Login = () => {
    const { signInUser, signInGoogle } = useContext(ContextProvider);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                toast.success('Sign in successfully');
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message);
            });
    };

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                if (result.user) {
                    axiosPublic.post('/user', { email: result.user.email, name: result.user.displayName, role: 'user' })
                        .then(res => {
                            if (res.data) {
                                toast.success('Sign in successfully');
                                navigate('/');
                            }
                        });
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
    };

    return (
        <div className="flex justify-between" style={backgroundImageStyle}>
            <div className="lg:w-[50%] mx-auto w-full h-screen flex justify-center items-center">
                <form className="bg-white lg:w-[70%] px-9 py-3 shadow-lg rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                        Login Now !
                    </h2>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            className={`w-full p-2 border block rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            className={`w-full p-2 block border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>

                    <div className="flex flex-col items-center gap-2 justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-800 text-white w-full rounded-md font-bold focus:outline-none focus:shadow-outline-blue"
                        >
                            Login
                        </button>
                        <div>
                            <h1>OR</h1>
                        </div>
                        <div
                            onClick={handleGoogle}
                            className="w-full cursor-pointer text-center border bg-blue-800 text-white px-4 py-2 rounded-md flex items-center justify-center gap-1 text-xl"
                        >
                            <p><FcGoogle /></p>
                            <p>Google</p>
                        </div>
                    </div>
                    <h1 className="mt-5">
                        {"Don't"} have any account?
                        <Link className="text-blue-600 font-bold underline ml-1" to="/registration">
                            Registration
                        </Link>
                    </h1>
                </form>
            </div>
        </div>
    );
};

export default Login;
