import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from './features/auth/AuthForm';
import LaunchList from './components/LaunchList';
import Header from './components/Header';
import { login } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    if (authUser) {
      dispatch(login({ email: authUser.email, password: authUser.password }));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      {isAuthenticated ? (
        <>
          <Header />
          <LaunchList />
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}

export default App;
