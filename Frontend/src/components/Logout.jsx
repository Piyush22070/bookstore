import React from 'react';
import { useAuth } from '../../context/Authprovider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const [authuser, setAuthuser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Clear user data from context
      setAuthuser({
        ...authuser,
        user: null,
      });

      // Remove user data from local storage
      localStorage.removeItem("Users");

      // Show success message
      toast.success("Logout successful");

      // Redirect to home or login page
      setTimeout(() => {
        window.location.reload()
         // Redirect to home or another page
      }, 3000);
    } catch (error) {
      toast.error("Error logging out");
      setTimeout(() => {
        // Redirect to home or another page
     }, 3000);
    }
  };

  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
