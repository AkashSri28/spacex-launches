import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from './authSlice';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    const user = { email, password };
    dispatch(login(user));
  };

  const handleSignup = () => {
    const user = { email, password };
    dispatch(signup(user));
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
      />
      {isLogin ? (
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>
      ) : (
        <button onClick={handleSignup} className="w-full bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      )}

        <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full mt-4 text-blue-500"
        >
            {isLogin ? 'Need to sign up?' : 'Already have an account?'}
        </button>
    </div>
  );
};

export default AuthForm;
