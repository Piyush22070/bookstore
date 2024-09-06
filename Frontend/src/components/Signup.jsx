import React from 'react';
import Login from '../components/Login';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      password:data.password
    }

    await axios.post("http://localhost:3000/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('signup suceesfull');

      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));

    }).catch((error)=>{
      console.log(error);
      toast.error('User already exist');
    })
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box p-6 rounded-lg shadow-lg">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg mb-3 text-center">Sign-Up</h3>
            <div className="space-y-2">
              <label>Name</label>
              <input
                {...register('name', { required: true })}
                type="text"
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label>Email</label>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label>Password</label>
              <input
                {...register('password', { required: true })}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-400">
                Signup
              </button>
              <p>
                <span
                  onClick={() =>
                    document.getElementById('my_modal_3').showModal()
                  }
                  className="text-blue-500 cursor-pointer underline"
                >
                  Have an account?
                </span>
              </p>
            </div>
          </form>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;
