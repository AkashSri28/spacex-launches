import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-white shadow-md p-4 mb-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SpaceX Launches</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
