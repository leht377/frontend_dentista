import { useState } from 'react';
import loginServices from '../../services/login';
import Alert from '../Alert';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const [typeMsg, setTypeMsg] = useState(null);

  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const dataUser = await loginServices.login({ username, password });
      if (dataUser) {
        window.localStorage.setItem('dataUserlogged', JSON.stringify(dataUser));
        navigate('/Dashboard');
      }
    } catch (error) {
      setMsg('wrong username or password ');
      setTypeMsg('error');
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    }
  };

  return (
    <>
      <Alert msg={msg} type={typeMsg} />
      <form
        className="container-sm container-md mt-5"
        style={{ minWidth: '220px', maxWidth: '400px' }}
        onSubmit={handleLogin}
      >
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="d-grid">
          <Button type={'submit'} text={'Ingresar'} />
        </div>
      </form>
    </>
  );
};

export default Login;
