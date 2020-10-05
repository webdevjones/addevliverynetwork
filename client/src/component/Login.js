import React, { useState } from 'react'
import { checkPass } from '../utils/requests'
const Login = ({ setLogin }) => {
    const [pass, setPass] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        let accept = await checkPass(pass)
        if (accept) {
            setLogin(1)
        }
        else {
            let loginBtn = document.getElementById('login-form-submit')
            loginBtn.innerText = "Incorrect..."
            loginBtn.classList.toggle('incorrect')
            setPass("")
            setTimeout(() => {
                loginBtn.innerText = "Enter"
                loginBtn.classList.toggle('incorrect')
            }, 1500)
        }


    }
    return (
        <div id="login">
            <div className="login--form--wrapper">
                <div className="login--form--info">

                    <div className="login--form--info--title">
                        <div className="login--form--info--title--wrapper">
                            <div className="login--form--info--title--main">
                                MRC
                            </div>
                            <div className="login--form--info--title--sub">
                                <div className="login--form--info--title--sub--text">
                                    Ad Delivery Network
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="login--form--info--logo" src="/static/ADN.svg" alt="MRC ADN Logo" />
                </div>
                <form className="login--form">
                    <div className="login--form--field">
                        <label>Password:</label>
                        <input type="text" value={pass} onChange={e => setPass(e.currentTarget.value)}></input>
                    </div>
                    <button id="login-form-submit" type="submit" onClick={handleSubmit}>Enter</button>
                </form>
            </div>
        </div>
    )
}
export default Login
