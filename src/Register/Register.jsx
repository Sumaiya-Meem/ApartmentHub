import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import {Link , useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ContextProvider } from "../Context/AuthProvider";
import auth from "../firebase/firebase.config";
import bg from "../../public/bg1.avif";

const IMG_HOASTING_KEY = import.meta.env.VITE_IMAGE_UPLOAD_API;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${IMG_HOASTING_KEY}`

const Registration = () => {

    const axiosPublic = useAxiosPublic();
    const {createUser} = useContext(ContextProvider);
    const navigate = useNavigate()
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit =async (data) => {
        console.log(data);
        const imgFile = { image: data.photo[0] }
        console.log(imgFile)
        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        })
        console.log(res)
        const img_url = res?.data?.data?.display_url;
        console.log(img_url)
        if(img_url){
            createUser(data.email, data.password)
            .then(result=> {
                console.log(result.user)
                if(result.user){
                     updateProfile(auth.currentUser, {
                        displayName: data.username,
                        photoURL: img_url,
                     })
                     .then(()=> {

                        axiosPublic.post('/user', {email: result?.user?.email, name: result?.user?.displayName, role: 'user'})
                        .then(res=> {
                             if(res.data.acknowledged){
                                toast.success('user create successfully!')
                                navigate('/')
                             }
                        }) 
                        
                     })
                     .catch(error=> {
                        toast.error(error.message)
                     })
                }
            })
            .catch(error=> {
                toast.error(error.message);
            })
        }
    }
    const backgroundImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      };
    

    return (
        <div className="flex justify-between" style={backgroundImageStyle}>
            <div className="lg:w-[50%] mx-auto lg:px-0 lg:py-0 px-3  min-h-screen w-full py-5 flex justify-center items-center">

                <form className="bg-white lg:w-[70%]  p-8 shadow-lg rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl text-[#008374] font-bold mb-4">Registration Now</h2>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="username"
                            {...register('username', { required: 'Username is required' })}
                            className={`w-full p-2 border block rounded ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.username && <span className="text-red-700 text-sm">{errors.username.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Upload Photo</label>
                        <input
                            type="file"
                            id="photo"
                            {...register('photo', { required: 'Photo is required' })}
                            className={`w-full p-2 block border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.photo && <span className="text-red-500 text-sm">{errors.photo.message}</span>}
                    </div>

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

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className=" w-full bg-[#008374] text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        >
                            Sing Up
                        </button>
                    </div>
                    <h1 className="mt-5">Do You Have Any Account? <Link className="text-[#358b81] font-bold underline" to='/login'>Login</Link></h1>
                </form>


            </div>

            
        </div>
    );
};

export default Registration;