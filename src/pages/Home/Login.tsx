import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../../styles/SignInSignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import axios , { AxiosError } from 'axios';
import { useNavigate } from "react-router-dom";
import useAuthContext from '../../context/Authcontext';
const Login: React.FC = () => {
  const { t } = useTranslation();
  const { login } = useAuthContext();

  // Register Student
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  // Login Student
  const [emailLogin, setEmailLogin] = useState<string>('');
  const [passLogin, setPassLogin] = useState<string>('');
  
  // Class options
  

  const handleRegisterClick = async (e: FormEvent) => {
    e.preventDefault();
    setIsActive(true);
  
    // Validation logic
    if (!name || !email || !phone || !password || password !== confirmPassword) {
      toast.error("Please check your input fields.");
      return;
    }
  
    const data = {
      name,
      email,
      phone,
      image,
      password,
      password_confirmation: confirmPassword
    };
  
    try {
      await axios.post('http://localhost:8000/register', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      toast.success(t('account_created_successfully'));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error details:", error.response?.data);
        toast.error(error.response?.data.message || "An error occurred");
      } else if (error instanceof Error) {
        toast.error("An unexpected error occurred: " + error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  
  
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
        await login({ email: emailLogin, password: passLogin });
    } catch (error) {
        console.error("Login error:", error);
        toast.error("Failed to log in. Please check your credentials.");
    }
};


  return (
    <div className={`mt-[15vh] h-[70vh] custom container content ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleRegisterClick}>
          <h1 className="text-3xl font-bold">{t('create_account')}</h1>
          <div className="form-row">
            <input 
              type="text" 
              placeholder={t('name')} 
              value={name} 
              name='name'
              onChange={(e) => setName(e.target.value)} 
              className="text-lg"
            />
          </div>
          <div className="form-row">
            <input 
              type="text" 
              placeholder={t('email')} 
              value={email} 
              name='email'
              onChange={(e) => setEmail(e.target.value)} 
              className="text-lg"
            /></div>
            <div className="form-row">
            <input 
              type="text" 
              placeholder={t('phone')} 
              value={phone} 
              name='phone'
              onChange={(e) => setPhone(e.target.value)} 
              className="text-lg"
            />
          </div>
          <div className="form-row">
            <input 
              type="password" 
              placeholder={t('password')} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="text-lg"
            />
            <input 
              type="password" 
              placeholder={t('confirm_password')} 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              className="text-lg"
            />
          </div>
          <button type="submit" className="text-lg font-semibold">{t('create_account')}</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold">{t('login')}</h1>
          <input 
            type="text" 
            placeholder={t('email')} 
            value={emailLogin} 
            onChange={(e) => setEmailLogin(e.target.value)} 
            className="text-lg"
          />
          <input 
            type="password" 
            placeholder={t('password')} 
            value={passLogin} 
            onChange={(e) => setPassLogin(e.target.value)} 
            className="text-lg"
          />
          <button type="submit" className="text-lg font-semibold">{t('login')}</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="text-2xl font-bold">{t('welcome_back')}</h1>
            <p className="text-lg">{t('personal_info')}</p>
            <button className="hidd text-lg font-semibold" id="login" onClick={handleLogin}>{t('login')}</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="text-2xl font-bold">{t('welcome_friend')}</h1>
            <p className="text-lg">{t('personal_info')}</p>
            <button className="hidd text-lg font-semibold" id="register" onClick={handleRegisterClick}>{t('create_account')}</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
