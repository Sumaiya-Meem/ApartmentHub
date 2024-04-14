import { useForm} from 'react-hook-form';
import   {toast , Toaster} from 'react-hot-toast'
import useAxiosSecure from"../../Hooks/useAxiosSecure"


const MakeAnnounce = () => {
    const { handleSubmit, register } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {
            const announcement = {
                title:data.title,
                description: data.description
            }
               
            axiosSecure.post('/announcement', announcement)
            .then(res=> {
                console.log(res.data)
                   if(res.data.acknowledged){
                    
                           toast.success('create announcement successfully')
                           
                   }
            })
    };

    return (
        <div>
            <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl font-semibold mb-4">Make Announcement</h2>

                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register('title', { required: 'Title is required' })}
                            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                  
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            {...register('description', { required: 'Description is required' })}
                            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                   

                    <button
                        type="submit"
                        className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-950 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MakeAnnounce;