import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context';
import MessageBox from './MessageBox';

function Login() {
  const { loginUser } = useContext(MyContext);
  const { registerUser } = useContext(MyContext);
  const { logoutUser } = useContext(MyContext);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if(!userName || !userPassword){
      MessageBox("אנא מלאי שם משתמש וסיסמה")
      return
    }
    const success = loginUser({ userName, userPassword });
    if (success) {
      navigate('/homePage');
    }
  };
  const handleRegister = () => {
    if(!userName || !userPassword){
      MessageBox("אנא מלאי שם משתמש וסיסמה")
      return
    }
    const success = registerUser({ userName, userPassword });
    if (success) {
      navigate('/homePage');
    }
  };
  const handleLogUot = () => {
    const success = logoutUser({ userName, userPassword });
    if (success) {
      navigate('/homePage');
    }
  };


  return (
    <div className='loginPage'>
      <div className='logIn'>
        <input placeholder="שם משתמש" onChange={e => setUserName(e.target.value)} />
        <input placeholder="סיסמה" type="password" onChange={e => setUserPassword(e.target.value)} />
        <button onClick={handleLogin}>התחבר</button>
        <button onClick={handleRegister}>הרשם</button>
        <button onClick={handleLogUot}>יציאת משתמש</button>
      </div>
    </div>
  );
}
export default Login;