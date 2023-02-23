import * as React from 'react';
import { useState } from 'react';
import config from '~/config';

import styles from './Login.module.scss';

import classNames from 'classnames/bind';
import Home from '../Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Login() {
    const [isLogin, setIslogin] = useState(localStorage.getItem('accessToken') != null);
    const [valueEmail, setvalueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        var formdata = new FormData();
        formdata.append('username', valueEmail);
        formdata.append('password', valuePassword);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };

        fetch(`http://127.0.0.1:8000/login?username=${valueEmail}&password=${valuePassword}`, requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw Error(response.status);
            })
            .then((result) => {
                localStorage.setItem('access_token', result.access_token);
                localStorage.setItem('email', result.email);
                localStorage.setItem('token_type', result.token_type);
                setIslogin(true);
                setvalueEmail('');
                setValuePassword('');
            })
            .catch((error) => {
                alert('email, password are wrong');
            });

        // localStorage.removeItem("accessToken")
    };

    const onLogoutSuccess = () => {
        setIslogin(false);
    };

    return (
        <div>
            {isLogin ? (
                <Home onLogoutSuccess={onLogoutSuccess} isLogin={isLogin}></Home>
            ) : (
                <section>
                    <div className={cx('form-box')} onSubmit={handleSubmit}>
                        <div className={cx('form-value')}>
                            <form action="">
                                <p style={{ fontSize: '3rem', color: '#fff', textAlign: 'center' }}>Login</p>
                                <div className={cx('inputbox')}>
                                    <input type="email" required
                                    onChange={(e) => setvalueEmail(e.target.value)} />
                                    <label for="">
                                        Email <FontAwesomeIcon icon={faEnvelope} />
                                    </label>
                                </div>
                                <div className={cx('inputbox')}>
                                    <input 
                                    type="password" required 
                                    values={valuePassword}
                                    onChange={(e) => setValuePassword(e.target.value)} 
                                    />
                                    <label for="">
                                        Password <FontAwesomeIcon icon={faLock}
                                        />
                                    </label>
                                </div>
                                <div className={cx('forget')}>
                                    <label for="">
                                        <input type="checkbox" 
                                        value={valuePassword}
                                        />
                                        Remember Me <a href={config.routes.login}>Forget Password</a>
                                    </label>
                                </div>
                                <button className={cx('login-btn')}>Log in</button>
                                <div className={cx('register')}>
                                    <p>
                                        Don't have a account <a href={config.routes.register}>Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
