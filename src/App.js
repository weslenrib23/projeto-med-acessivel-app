
import './App.css';
import './LoginPage.css';
import logo from './img/logotipotransparente.png'

import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // aqui você pode colocar sua lógica de autenticação
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='container'>
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
    <form className="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <img src={logo} className='logo' alt='login de logo'/>
      <div className= 'login' style={{border: ' 2px solid', borderRadius: '5px'}}>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div style={{border: ' 2px solid', borderRadius: '5px'}}>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
    </div>
    </div>
  );
};

export default LoginPage;



