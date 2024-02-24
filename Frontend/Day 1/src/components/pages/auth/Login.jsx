import { useState } from 'react';
import '../../../assets/css/login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const [loginReady, setLoginReady] = useState(false);


  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
    setLoginEmailError('');
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
    setLoginPasswordError('');
  };

  const validateLoginEmail = () => {
    // Validate email for login
    if (!loginEmail.includes('@')) {
      setLoginEmailError('Email must contain @.');
      return false;
    }

    // Use a regular expression for additional email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
      setLoginEmailError('Invalid email format.');
      return false;
    }

    return true;
  };

  const validateLoginPassword = () => {
    // Password should be at least 8 characters
    if (loginPassword.length < 8) {
      setLoginPasswordError('Password must be at least 8 characters.');
      return false;
    }
    return true;
  };


  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Validate email and password before submitting the login form
    if (validateLoginEmail() && validateLoginPassword()) {
      // Perform login logic here
      console.log('Valid email and password for login. Submitting the form...');
      setLoginReady(true); // Set login ready to true when all details are entered
    } else {
      console.log('Invalid email or password for login. Please check your inputs.');
    }
  };

  return (
    <div id="bk">
    <section className={`wrapper`}>
      <div className="form signup">
        <header>Login</header>
        <form onSubmit={handleLoginSubmit}>
          <input type="text" placeholder="Email address" value={loginEmail} onChange={handleLoginEmailChange} required />
          {loginEmailError && <span className="error">{loginEmailError}</span>}
          <input type="password" placeholder="Password" value={loginPassword} onChange={handleLoginPasswordChange} required />
          {loginPasswordError && <span className="error">{loginPasswordError}</span>}
          {loginReady && <Link to="/Home"><input type="submit" value="Login" /></Link>}
          {!loginReady && <input type="submit" value="Login" />}
          <div className='already_acc'>New to AgroInovate?  <Link to="/signup">Create Account</Link></div>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Login;