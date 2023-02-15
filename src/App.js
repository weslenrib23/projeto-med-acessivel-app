
import './App.css';
import './LoginPage.css';
import logo from './img/logotipotransparente.png'
import fundo from './img/wallpaper.png';

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
      <div className= 'login' style={{}}>
        <label htmlFor="username">Login</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className= 'login' style={{}}>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className='button' type="submit">Entrar</button>
      <div className='senha'>Esqueceu sua senha?</div>
      <div className='conta'>
      <div>Não tem uma conta?</div>
      <button className= 'cadastrar' type="submit">Cadastrar</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default LoginPage;



