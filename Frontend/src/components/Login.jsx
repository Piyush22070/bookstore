import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setModalOpen] = useState(true);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:3000/user/login", userInfo);
      console.log(response.data);

      if (response.data) {
        toast.success('Login successful');
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        setTimeout(() => {
          setModalOpen(false);
          window.location.replace('/'); // Redirect to home or another page
        }, 3000);
      }
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  return (
    <dialog open={isModalOpen} className="modal">
      <div className="modal-box relative">
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 space-y-2">
            <label>Email</label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <label>Password</label>
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-pink-500 px-4 py-2 text-white rounded-md hover:bg-pink-400"
            >
              Login
            </button>
            <p>
              Not registered?{' '}
              <Link to="/signup" className="text-blue-500 cursor-pointer underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
