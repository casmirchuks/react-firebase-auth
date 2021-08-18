import React from "react";

export default function login(props) {

    const {
        email, 
        setEmail, 
        password,
        setPassword, 
        login, 
        signup, 
        hasAccount, 
        setHasAccount,
        emailError, 
        passwordError 
    } = props; 


    return (
        <section className="login">
            <div className="loginContainer">
            <h1>Sign In</h1>
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMessage">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMessage">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={login} >Log In</button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={signup}>Sign Up</button>
                        <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Log In</span></p>
                        </>
                        )}
                </div>
            </div>
        </section>
    );
}
