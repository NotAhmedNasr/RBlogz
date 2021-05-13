import classes from './Register.module.css';
import React, { useState } from 'react';
import OutlineButton, { BtnTone } from '../UI/OutilneButton/OutlineButton';
import { FcManager, FcKey, FcAddressBook, FcPlanner, FcInfo, FcGoogle, FcOk } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [dob, setDob] = useState('');


    return (
        <div className={classes.Register}>
            <h1 className={classes.Heading}>
                Registration Form
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
                <small className={classes.InputPrompt}>2 - 50 Letters and numbers only</small>
                <small className={classes.Invalid}></small>
            </div>

            <div className={classes.InputGroup}>
                <IconContext.Provider value={{ size: '2.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                    <div className={classes.Icon}>
                        <FcAddressBook />
                    </div>
                </IconContext.Provider>
                <input
                    className={classes.Input}
                    type='text'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => { setEmail(e.currentTarget.value) }} />
                <small className={classes.Invalid}>Invalid Email!</small>
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
                <small className={classes.InputPrompt}>8 - 50 mix letters and numbers</small>
                <small className={classes.Invalid}>Invalid Password!</small>
            </div>

            <div className={classes.InputGroup}>
                <IconContext.Provider value={{ size: '2.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                    <div className={classes.Icon}>
                        <FcOk />
                    </div>
                </IconContext.Provider>
                <input
                    className={classes.Input}
                    type='password'
                    placeholder='Confirm Password'
                    value={cPassword}
                    onChange={(e) => { setCPassword(e.currentTarget.value) }} />
                <small className={classes.Invalid}>Password doesn't match!</small>
            </div>
            
            <div className={classes.InputGroup}>
                <IconContext.Provider value={{ size: '2.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                    <div className={classes.Icon}>
                        <FcInfo />
                    </div>
                </IconContext.Provider>
                <input
                    className={classes.Input}
                    type='text'
                    placeholder='First Name'
                    value={fname}
                    onChange={(e) => { setFname(e.currentTarget.value) }} />
                <small className={classes.InputPrompt}>2 - 50 characters</small>
                <small className={classes.Invalid}>Invalid Name!</small>
            </div>
            <div className={classes.InputGroup}>
                <IconContext.Provider value={{ size: '2.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                    <div className={classes.Icon}>
                        <FcInfo />
                    </div>
                </IconContext.Provider>
                <input
                    className={classes.Input}
                    type='text'
                    placeholder='Last Name'
                    value={lname}
                    onChange={(e) => { setLname(e.currentTarget.value) }} />
                <small className={classes.InputPrompt}>2 - 50 characters</small>
                <small className={classes.Invalid}>Invalid Name!</small>
            </div>
            <div className={classes.InputGroup}>
                <IconContext.Provider value={{ size: '2.5em', style: { verticalAlign: 'middle', flex: '0 0 auto' } }}>
                    <div className={classes.Icon}>
                        <FcPlanner />
                    </div>
                </IconContext.Provider>
                <input
                    className={classes.Input}
                    type='date'
                    placeholder='Birth Date'
                    value={dob}
                    min='1940-01-01'
                    max='2015-12-31'
                    onKeyPress={() => false}
                    onChange={(e) => { setDob(e.currentTarget.value) }} />
                <small className={classes.InputPrompt}>Min 1940 | Max 2015</small>
                <small className={classes.Invalid}></small>
            </div>
            <div className={classes.Submit}>
                <OutlineButton tone={BtnTone.light}>
                    Register
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
                <span>Already have an account? </span>
                <Link to='/login'>
                    Login
                </Link>
                <span>, instead!</span>
            </div>
        </div>
    );
}


export default Register;