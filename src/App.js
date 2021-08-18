import React, { useState, useEffect } from "react";
import fireApp from "./firebase";
import './App.css';
import Login from "./components/Login";
import Hero from "./components/Hero";


function App() {
  const [ user, setUser ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ emailError, setEmailError ] = useState("");
  const [ passwordError, setPasswordError ] = useState("");
  const [ hasAccount, setHasAccount ] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const login = () => {
    clearErrors();
    fireApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
            // eslint-disable-next-line default-case
          switch(err.code){
            case "auth/invalid-email":
              case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError(err.message);
                  break;
                case "auth/wrong-password":
                  setPasswordError(err.message);
                  break;
          }
      });
  }

  const signup = () => {
    clearErrors();
    fireApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/email-already-in-use":
            case "auth/invalid-emai":
                setEmailError(err.message);
                break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
        }
    });
  }

  const logout = () => {
    fireApp.auth().signOut();
  }

  const authListener = () => {
    fireApp.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <Hero logout={logout}/>
      ) : (
        <Login
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        login={login} 
        signup={signup}
        hasAccount={hasAccount} 
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        />
       )}
    </div>
  );
}

export default App;