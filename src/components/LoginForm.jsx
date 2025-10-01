import { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { useUserContext } from "../context/UserContext";
import ThemeToggleButton from "./ThemeToggleButton";
import { MyThemeContext } from '../context/MyThemeProvider';



export function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState('');

  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme } = useContext(MyThemeContext);           

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 10) setSubmitResult('Password must be at least 10 characters long');
    else if (userPassword === userEmail) setSubmitResult('Password must not match email address');
    else {
      setSubmitResult('Successful login');
      handleUpdateUser({ email: userEmail });
    }
  };

const bgURL = "https://images.unsplash.com/photo-1489244094604-1758de9a6728?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Background = ({ children }) => (
    <Box
      sx={{
        minHeight: '100vh',
        maxWidth: 100,
        display: 'grid',
        placeItems: 'center',
        backgroundImage: `url(${bgURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
}}
    >
      {children}
    </Box>
  );
if (currentUser?.email) {
    return (
      <div className="LoginForm componentBox"
           style={{ 
            background: theme.background, 
           color: theme.foreground, 
           padding: 24, 
           borderRadius: 24 }}>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
        {/* <div style={{ marginTop: 12 }}><ThemeToggleButton /></div> */}
      </div>
    );
  }
return (
    <div className="LoginForm componentBox"
         style={{ 
          background: theme.background, 
          color: theme.foreground, 
          padding: 24, 
          borderRadius: 24 ,
          height: "30vh",
          width: 200
          }}>

      <form onSubmit={handleSubmit} noValidate>
        
        <div className="formRow">
          
          {/* <label>Email Address:
            <input type="email" value={userEmail} name="userEmail"
                   onChange={(e) => setUserEmail(e.target.value)} required />
          </label> */}
          <TextField type="email" 
          value={userEmail} 
          name="userEmail"
          onChange={(e) => setUserEmail(e.target.value)} required 
          label="Email"
          sx={{top:"80px"}}
          />

        </div>
        <div className="formRow">
          <TextField type="password" 
          value={userPassword} 
          name="userPassword"
          onChange={(e) => setUserPassword(e.target.value)} required 
          label="Password"
          sx={{top:"120px"}}
          />
        </div>
        <Button type="submit"
        sx={{top:"140px"}}
        >Log In</Button>
        <p aria-live="polite">{submitResult}</p>
      </form>
      {/* <div style={{ marginTop: 12 }}><ThemeToggleButton /></div> */}
    </div>
  );
  
}

export function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [email,     setEmail]     = useState('');
  const [password,  setPassword]  = useState('');
  const [resultMsg, setResultMsg] = useState('');

  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme } = useContext(MyThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName() || lastName()) {
      setResultMsg('Please enter your first and last name.');
      return;
    }
    if (email(email)) {
      setResultMsg('Please enter a valid email address.');
      return;
    }
    if (password.length < 10) {
      setResultMsg('Password must be at least 10 characters long.');
      return;
    }
    if (password === email) {
      setSubmitResult('Password must not match email address.');
    }
    if (currentUser?.email) {
    return (
      <div className="SignUpForm componentBox"
           style={{ 
           background: theme.background, 
           color: theme.foreground, 
           padding: 24, 
           borderRadius: 24 }}>
        <p>Welcome {email}!</p>
        <button onClick={() => handleUpdateUser({})}>Sign Up</button>
        {/* <div style={{ marginTop: 12 }}><ThemeToggleButton /></div> */}
      </div>
    );
  }}
return (
    <div className="SignUpForm componentBox"
         style={{ 
          background: theme.background, 
          color: theme.foreground, 
          padding: 24, 
          borderRadius: 24 ,
          height: "40vh",
          width: 200
          }}>

      <form onSubmit={handleSubmit} noValidate>
        
        <div className="formRow">
          
          {/* <label>Email Address:
            <input type="email" value={userEmail} name="userEmail"
                   onChange={(e) => setUserEmail(e.target.value)} required />
          </label> */}
          <TextField type="firstname" 
          value={firstName} 
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)} required 
          label="First Name"
          sx={{top:"10px"}}
          />

        </div>
        <div className="formRow">
          <TextField type="lastname" 
          value={lastName} 
          name="lastname"
          onChange={(e) => setLastName(e.target.value)} required 
          label="Last Name"
          sx={{top:"35px"}}
          />
          </div>
          <div className="formRow">
          <TextField type="email" 
          value={email} 
          name="email"
          onChange={(e) => setEmail(e.target.value)} required 
          label="Email"
          sx={{top:"70px"}}
          />
          </div>
          <div className="formRow">
          <TextField type="password" 
          value={password} 
          name="password"
          onChange={(e) => setPassword(e.target.value)} required 
          label="Password"
          sx={{top:"100px"}}
          />
        </div>
        <Button type="submit" sx={{top:"115px"}}
        >Submit
        </Button>
        <p aria-live="polite">{resultMsg}</p>
      </form>
      {/* <div style={{ marginTop: 12 }}><ThemeToggleButton /></div> */}
    </div>
    
  );
  
}
