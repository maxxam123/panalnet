import React, { useContext, useState } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        tpye="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        tpye="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ padding: 10, width: 100 }} onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
