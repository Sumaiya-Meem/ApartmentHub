import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {signIn, signInWithGoogle} =useContext(AuthContext)
    const location =useLocation()

    const navigate =useNavigate()
    const from =location.state?.from?.pathname || "/";

    const handleLogin = e =>{
        e.preventDefault();

        const form = e.target;

        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password)
        
        signIn(email,password)
        .then(res=>{
            const user =res.user;
            console.log("Login User: ",user);
            Swal.fire({
                title: "Login Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            navigate(from,{replace:true})
        })

    }

    const handleGoogle = () =>{
      signInWithGoogle()
      .then(res=>{
        console.log(res.data)
        Swal.fire({
          title: "Login Successfully",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate(from,{replace:true})

      })
      .catch(error=>{
        console.log(error)
      })
    }
    return (
        <div className='flex gap-4'>
            
  <div className=''>
  <Card className="max-w-lg">
    <h1 className='mt-10 text-center text-3xl text-purple-500 font-semibold'>Login</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleLogin}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" name="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" name="password" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Login</Button>
        <p>Do not have an account? <Link to="/register">
        <span className='text-blue-500'>SignUp</span> here
        </Link></p>
        <div className='flex justify-center'>
        <Button outline pill className='hover:bg-slate-200' onClick={handleGoogle}>
        <FcGoogle className='text-2xl text-blue-500 mr-4 ' />
        <span>Continue With Google</span>
      </Button>
          </div>
      </form>
    </Card>
  </div>

   


        </div>
    );
};

export default Login;