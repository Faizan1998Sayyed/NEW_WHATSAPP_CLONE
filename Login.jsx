import React from 'react'
import './Login.css';
import Finger from '../Assets/fingerprint.png'

export default function Login() {
  return (
    <div>
        <div className="login">
            <form>
                <h2>Hello!<br/><span>Welcome Back!</span></h2>
                <div className="inputbox">
                    <input type="text" placeholder="username"/>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
                <div className="inputbox">
                    <input type="password" placeholder="password"/>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                </div>
                <label>
                    <input type="checkbox"/>Keep me login
                </label>
                <div className="inputbox">
                    <input type="submit" value="log in"/>
                 </div>
            </form>
            <h4>OR</h4>
            <div className="fingerprint">
                <div className="fingerprintbox">
                    <img src={Finger}/>
                </div>
            </div>
            <p>Login with finger print</p>
        </div>

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        
    </div>
  )
}
