// Signup.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/login.css'

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupEmailError, setSignupEmailError] = useState('');
  const [signupPasswordError, setSignupPasswordError] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
    setSignupEmailError('');
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
    setSignupPasswordError('');
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

  const validateSignupPassword = () => {
    // Password should be at least 8 characters
    if(signupPassword.length< 8){
      setSignupPasswordError('Password should contain atleast 8 characters.');
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

  return (
    <div id="bk">
      <section className={`wrapper active`}>
        <div className="form signup">
          <header>Signup</header>
          <form onSubmit={handleSignupSubmit}>
            <input type="text" placeholder="Full name" value={fullName} onChange={handleFullNameChange} required />
            <input type="text" placeholder="Email address" value={signupEmail} onChange={handleSignupEmailChange} required />
            {signupEmailError && <span className="error">{signupEmailError}</span>}
            <input type="password" placeholder="Password" value={signupPassword} onChange={handleSignupPasswordChange} required />
            {signupPasswordError && <span className="error">{signupPasswordError}</span>}
            <input type="submit" value="Create Account" />
            <div className='already_acc'>Already have an account? <Link to="/">Login</Link></div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
