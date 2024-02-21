import { useState } from 'react';
import './login.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [isSignup, setSignup] = useState(true);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmailError, setSignupEmailError] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const [loginReady, setLoginReady] = useState(false);

  const switchForm = () => {
    setSignup(!isSignup);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
    setSignupEmailError('');
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
    setLoginEmailError('');
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
    setLoginPasswordError('');
  };

  const validateSignupEmail = () => {
    // Validate email for signup
    if (!signupEmail.includes('@')) {
      setSignupEmailError('Email must contain @.');
      return false;
    }

    // Use a regular expression for additional email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail)) {
      setSignupEmailError('Invalid email format.');
      return false;
    }

    return true;
  };

  // const validateSignupPassword = () => {
  //   // Password should be at least 8 characters
  //   return signupPassword.length >= 8;
  // };

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
  const validateSignupPassword = () => {
    // Password should be at least 8 characters
    if (loginPassword.length < 8) {
      setLoginPasswordError('Password must be at least 8 characters.');
      return false;
    }
    return true;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Validate email and password before submitting the signup form
    if (validateSignupEmail() && validateSignupPassword()) {
      // Perform signup logic here
      console.log('Valid email and password for signup. Submitting the form...');
    } else {
      console.log('Invalid email or password for signup. Please check your inputs.');
    }
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
    <section className={`wrapper ${isSignup ? 'active' : ''}`}>
      <div className="form signup">
        <header onClick={switchForm}>Signup</header>
        <form onSubmit={handleSignupSubmit}>
          <input type="text" placeholder="Name" value={fullName} onChange={handleFullNameChange} required />
          <input type="text" placeholder="Email address" value={signupEmail} onChange={handleSignupEmailChange} required />
          {signupEmailError && <span className="error">{signupEmailError}</span>}
          <input type="password" placeholder="Password" value={signupPassword} onChange={handleSignupPasswordChange} required />
          <div className="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label htmlFor="signupCheck">By clicking on Create Account, I accept all terms and conditions*</label>
          </div>
          <input type="submit" value="Create Account"/>
        </form>
      </div>
      <div className="form login">
        <header onClick={switchForm}>Login</header>
        <form onSubmit={handleLoginSubmit}>
          <input type="text" placeholder="Email address" value={loginEmail} onChange={handleLoginEmailChange} required />
          {loginEmailError && <span className="error">{loginEmailError}</span>}
          <input type="password" placeholder="Password" value={loginPassword} onChange={handleLoginPasswordChange} required />
          {loginPasswordError && <span className="error">{loginPasswordError}</span>}
          <a href="#">Forgot password?</a>
          {loginReady && <Link to="/Home"><input type="submit" value="Login" /></Link>}
          {!loginReady && <input type="submit" value="Login" />}
        </form>
      </div>
    </section>
    </div>
  );
};

export default Login;