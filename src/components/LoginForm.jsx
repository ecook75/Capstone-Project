import { useState, useContext } from 'react';
import { TextField } from '@mui/material';
//import { useUserContext } from "../context/UserContext";
import ThemeToggleButton from "./ThemeToggleButton";


function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState('');

  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme } = useContext(MyThemeContext);           

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) setSubmitResult('Password must be at least 5 characters long');
    else if (userPassword === userEmail) setSubmitResult('Password must not match email address');
    else {
      setSubmitResult('Successful login.');
      handleUpdateUser({ email: userEmail });
    }
  };
if (currentUser?.email) {
    return (
      <div className="LoginForm componentBox"
           style={{ background: theme.background, color: theme.foreground, padding: 16, borderRadius: 12 }}>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
        <div style={{ marginTop: 12 }}><ThemeToggleButton /></div>
      </div>
    );
  }
return (
    <div className="LoginForm componentBox"
         style={{ background: theme.background, color: theme.foreground, padding: 16, borderRadius: 12 }}>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formRow">
          {/* <label>Email Address:
            <input type="email" value={userEmail} name="userEmail"
                   onChange={(e) => setUserEmail(e.target.value)} required />
          </label> */}
          <TextField type="email" value={userEmail} name="userEmail"
                   onChange={(e) => setUserEmail(e.target.value)} required 
          label="Email" />
        </div>
        <div className="formRow">
          <label>Password:
            <input type="password" value={userPassword} name="password"
                   onChange={(e) => setUserPassword(e.target.value)} minLength={5} required />
          </label>
        </div>
        <button type="submit">Log In</button>
        <p aria-live="polite">{submitResult}</p>
      </form>
      <div style={{ marginTop: 12 }}><ThemeToggleButton /></div>
    </div>
  );
}
export default LoginForm;