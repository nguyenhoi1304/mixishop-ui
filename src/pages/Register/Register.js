import * as React from 'react';
import { useState } from 'react'
import axios from 'axios'

import styles from './Register.module.scss'
import classNames from 'classnames/bind';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)





export default function SignUp() {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        var data = JSON.stringify({
            "name": firstname + lastname,
            "email": email,
            "password": password
        });
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/user/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        console.log(data)
        axios(config)
            .then(function (response) {
                if (ConfirmPassword !== password) {
                    alert('Bạn xác nhận mật khẩu  không đúng! vui lòng nhập lại')
                } else if (password.length < 5) {
                    alert('Mật khẩu không đủ độ dài, Vui lòng nhập lại')
                } else if (response.status === 200) {
                    alert("Đăng ký tài khoản thành công")
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                }
                throw Error(response.status)

            })
            .catch(function (error) {

                return (error);
            });

    };

    return (
        <section>
       <div className={cx('form-box')} onSubmit={handleSubmit}>
            <div className={cx('form-value')}>
            <form action="">
                    <p style={{fontSize:'3rem',color:'#fff', textAlign:'center'}}>Register</p>
                    <div >
                        <div className={cx('inputbox')}>
                            <input 
                            type="text" required
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)} />
                            <label for="firstname">first name</label> 
                        </div>
                        <div className={cx('inputbox')}>
                            <input type="text" required
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)} />
                            <label for="lastname">last name</label> 
                        </div>
                    </div>
                    <div className={cx('inputbox')}>
                        <input type="email" required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className={cx('labelEmail')} for="emai">Email   <FontAwesomeIcon  icon={faEnvelope} /></label> 
                    </div>
                    <div className={cx('inputbox')}>
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required/>
                        <label for="password">Password <FontAwesomeIcon  icon={faLock} /></label>
                    </div>
                    <div className={cx('inputbox')}>
                        <input type="password" 
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required/>
                        <label for="confirmPassword">Confirm Password <FontAwesomeIcon  icon={faLock} /></label>
                    </div>
                   
                    <button type="submit" className={cx('login-btn')}>Register</button>
                    <div className={cx('register')}>
                        <p>Don't have a account <a href={config.routes.login}>Login</a></p>
                    </div>
                </form>
            </div>
       </div></section>
    );
}
