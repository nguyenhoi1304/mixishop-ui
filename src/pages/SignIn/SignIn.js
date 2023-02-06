import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Blog from '../Blos/Blog';
import { useState } from 'react'
import config from '~/config';


import styles from './SignIn.module.scss'
import classNames from 'classnames/bind';
import Home from '../Home';

const theme = createTheme();

const cx = classNames.bind(styles)


export default function SignIn() {



    const [isLogin, setIslogin] = useState(localStorage.getItem("accessToken") != null)
    const [valueEmail, setvalueEmail] = useState('')
    const [valuePassword, setValuePassword] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault();

        var formdata = new FormData();
        formdata.append("username", valueEmail);
        formdata.append("password", valuePassword);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`http://127.0.0.1:8000/login?username=${valueEmail}&password=${valuePassword}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw Error(response.status)
            })
            .then(result => {
                localStorage.setItem("access_token", result.access_token)
                localStorage.setItem("email", result.email)
                localStorage.setItem("token_type", result.token_type)
                setIslogin(true)
                setvalueEmail('')
                setValuePassword('')
            })
            .catch(error => {
                alert("email, password are wrong")
            }
            );

        // localStorage.removeItem("accessToken")
    };

    const onLogoutSuccess = () => {
        setIslogin(false)
    }

    return (
        <div>
                {isLogin ? <Home onLogoutSuccess={onLogoutSuccess} isLogin = {isLogin}></Home> :
                <div className={cx('form_signin')}>
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={valueEmail}
                                        onChange={(e) => setvalueEmail(e.target.value)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        value={valuePassword}
                                        onChange={(e) => setValuePassword(e.target.value)}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                               <span> Forgot password?</span>
                                        </Grid>
                                        <Grid item>
                                            <Link to = {config.routes.signup}>
                                            <span>{"Don't have an account? Sign Up"}</span>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>

                        </Container>
                    </ThemeProvider>
            </div>

                }
        </div>
    );
}