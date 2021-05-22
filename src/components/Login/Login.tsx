import classes from './Login.module.css';
import React, { useContext, useEffect, useState } from 'react';
import OutlineButton, { BtnTone } from '../UI/OutilneButton/OutlineButton';
import { FcManager, FcKey, FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link, useHistory } from 'react-router-dom';
import LogoImg from '../../assests/images/logo1.png';
import { login } from '../../Services/UserService';
import userContext from '../../Context/UserContext';
import Spinner from '../UI/Spinner/Spinner';
import { loginUser } from '../../Services/AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [loading, setLoading] = useState(false);

    const history = useHistory();
    let context = useContext(userContext);

    useEffect(() => {
        if (context?.user) {
            history.replace('/');
        }
    }, [context?.user, history]);

    const loginHandler = async () => {
        setLoading(true);
        login({ username, password }).then(({ data: user }) => {
            setLoading(false);
            loginUser(user, context!);
        }).catch(err => {
            setLoading(false);
            if (err.response.status) {
                setInvalid(true);
                setPassword('');
            }
        });
    }

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
                    {invalid ? <small className={classes.Invalid}>Invalid Username Or Password!</small> : null}
                </div>

                {
                    loading ? <Spinner size={50} /> : null
                }

                <div className={classes.Submit} onClick={loginHandler}>
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