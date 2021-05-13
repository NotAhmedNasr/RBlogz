import classes from './Login.module.css';
import React, { useState } from 'react';
import OutlineButton, { BtnTone } from '../UI/OutilneButton/OutlineButton';
import { FcManager, FcKey, FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import LogoImg from '../../assests/images/logo1.png'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={classes.LoginWrapper}>
            <div className={classes.Login}>
                <h1 className={classes.Heading}>
                    Login
            </h1>
                <div className={classes.InputGroup}>
                    <IconContext.Provider value={{ size: '2.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                        <div className={classes.Icon}>
                            <FcManager />
                        </div>
                    </IconContext.Provider>
                    <input
                        className={classes.Input}
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => { setUsername(e.currentTarget.value) }} />
                    <small className={classes.Invalid}></small>
                </div>
                <div className={classes.InputGroup}>
                    <IconContext.Provider value={{ size: '2.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                        <div className={classes.Icon}>
                            <FcKey />
                        </div>
                    </IconContext.Provider>
                    <input
                        className={classes.Input}
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => { setPassword(e.currentTarget.value) }} />
                    <small className={classes.Invalid}>Invalid Password!</small>
                </div>

                <div className={classes.Submit}>
                    <OutlineButton tone={BtnTone.light}>
                        Login
                </OutlineButton>
                </div>

                <div className={classes.Google}>
                    <h2>Or</h2>
                    <div className={classes.Submit}>
                        <OutlineButton tone={BtnTone.light}>
                            <div className={classes.GbtnContent}>
                                With Google
                            <IconContext.Provider value={{ size: '1.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                                    <div className={classes.Icon}>
                                        <FcGoogle />
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </OutlineButton>
                    </div>
                </div>

                <div className={classes.Redirect}>
                    <span>Don't have an account? </span>
                    <Link to='/register'>
                        Register Now!
                </Link>
                </div>
            </div>
            <div className={classes.LoginRight}>
                <img src={LogoImg} alt='login-pic' />
            </div>
        </div>
    );
}


export default Login;