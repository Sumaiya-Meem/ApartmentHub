import { useContext } from "react";
import { useForm } from "react-hook-form";
import {Link , useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ContextProvider } from "../Context/AuthProvider";

import bg from "../../public/bg1.avif";
const Login = () => {
    const {signInUser , signInGoogle} = useContext(ContextProvider);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        signInUser(data.email, data.password)
        .then(result=> {
            console.log(result.user);
            toast.success('sign in successfully')
            navigate('/');
        })
        .catch(error=> {
            console.log(error.message);
            toast.error(error.message);
        })
        
    };

    const handleGoogle = () => {

          signInGoogle()
          .then(result=> {
            if(result.user){
                axiosPublic.post('/user', {email: result.user.email, name: result.user.displayName, role: 'user'})
                .then(res=> {
                     if(res.data){
                        toast.success('sign in successfully')
                        navigate('/')
                     }
                }) 
            }
           
          })
          .catch(error=> {
            console.log(error);
            toast.error(error.message);
          })
    }
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      };
    
    return (
        <div className="flex justify-between" style={backgroundImageStyle}>
            <div className="lg:w-[50%] mx-auto w-full h-screen flex justify-center items-center">

                <form className="bg-white lg:w-[70%]  p-8 shadow-lg rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-bold mb-4">Login</h2>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            {...register('email', {
                                required: 'Email is required',
                            })}
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
                        className=" w-[45%] border border-blue-600 hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Login
                    </button>
                    <div><h1>OR</h1></div>
                    <div onClick={handleGoogle}
                        className="w-[45%] text-center border border-blue-600  px-4 py-2 rounded-full h"
                    >
                      Login with  Google
                    </div>

                   </div>
                   <h1 className="mt-5">Are You New Here? <Link className="text-blue-700 underline" to='/registration'>Registration</Link></h1>
                </form>


            </div>

           
        </div>
    );
};

export default Login;