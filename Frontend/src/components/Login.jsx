import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
    document.getElementById('my_modal_3').close(); // Close the dialog after submission
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            type="button"
            onClick={() => document.getElementById('my_modal_3').close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Login</h3>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt04 space-y-2">
              <label>Email</label>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div className="mt04 space-y-2">
              <label>Password</label>
              <input
                {...register('password', { required: true })}
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 px-3 text-white rounded-md hover:bg-pink-400"
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
    </div>
  );
}

export default Login;
