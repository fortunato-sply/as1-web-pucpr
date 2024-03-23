import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  const dbEmail = 'lucas.fortunato@pucpr.com';
  const dbPassword = '123';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnClick = () => {
    if(email === dbEmail && password === dbPassword)
      setMessage('Acessado com sucesso!')
    else
      setMessage('Email ou senha incorretos!')
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Login</h1>
        <div className="form-fields">
          <input  placeholder="E-mail" type="text" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleOnClick}>Acessar</button>
        </div>
        <label>{message}</label>
      </div>
    </div>
  );
}

export default App;
