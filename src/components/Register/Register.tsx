import classes from './Register.module.css';
import React, { useContext, useEffect, useState } from 'react';
import OutlineButton, { BtnTone } from '../UI/OutilneButton/OutlineButton';
import { FcManager, FcKey, FcAddressBook, FcPlanner, FcInfo, FcGoogle, FcOk } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link, useHistory } from 'react-router-dom';
import userContext from '../../Context/UserContext';
import { useFormik } from 'formik';
import { add } from '../../Services/UserService';
import { loginUser } from '../../Services/AuthService';
import RegisterUser from '../../Models/RegisterUser';
import Spinner from '../UI/Spinner/Spinner';

interface Errors {
    username?: string,
    email?: string,
    password?: string,
    cpassword?: string,
    fname?: string,
    lname?: string,
    dob?: string,
}

const Register = () => {

    const [dupUsername, setDupUsername] = useState(false);
    const [dupEmail, setDupEmail] = useState(false);
    const [loading, setloading] = useState(false)

    const validate = (values: any): Errors => {
        const errors: Errors = {};

        if (!values.username) {
            errors.username = 'Required';
        } else if (!values.username.match(/^[a-zA-Z0-9]{2,50}$/)) {
            errors.username = 'Invalid Username';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!values.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            errors.email = 'Invalid Email';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (!values.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,50}$/)) {
            errors.password = 'Invalid Password';
        }

        if (!values.cpassword) {
            errors.cpassword = 'Required';
        } else if (values.cpassword !== values.password) {
            errors.cpassword = 'Confirm Password Doesn\'t match';
        }

        if (!values.fname) {
            errors.fname = 'Required'
        } else if (!values.fname.match(/^[a-zA-Z]{2,50}$/)) {
            errors.fname = 'Invalid Name'
        }

        if (!values.lname) {
            errors.lname = 'Required'
        } else if (!values.lname.match(/^[a-zA-Z]{2,50}$/)) {
            errors.lname = 'Invalid Name'
        }

        if (!values.dob) {
            errors.dob = 'Required'
        } else if ((new Date(values.dob) > new Date('2015-12-31') || (new Date(values.dob) < new Date('1940-01-01')))) {
            errors.dob = 'Date is Out of Range'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: '',
            fname: '',
            lname: '',
            dob: '',
        },
        validate,
        onSubmit: (values) => {
            setloading(true);
            setDupUsername(false);
            setDupEmail(false);
            const user = new RegisterUser(values.username, values.email, values.fname, values.lname, values.password, values.dob);
            add(user).then(res => {
                setloading(false);
                loginUser(res.data, context!);
            }).catch(err => {
                console.log(err.response);
                setloading(false);
                if (err.response.data === 'DUP_username') {
                    setDupUsername(true)
                }

                if (err.response.data === 'DUP_email') {
                    setDupEmail(true)
                }
                window.scrollTo(0, 0);
            });
        }
    });

    const context = useContext(userContext);

    const history = useHistory();

    useEffect(() => {
        if (context?.user) {
            history.replace('/');
        }
    }, [context?.user, history]);

    return (
        <form className={classes.Register} onSubmit={formik.handleSubmit}>
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
                    name='username'
                    type='text'
                    placeholder='Username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <small className={classes.InputPrompt}>2 - 50 Letters and numbers only</small>
                {formik.errors.username && formik.touched.username ? <small className={classes.Invalid}>{formik.errors.username}</small> : null}
                {dupUsername ? <small className={classes.Invalid}>Username is already taken!</small> : null}
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
                    name='email'
                    placeholder='Email Address'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? <small className={classes.Invalid}>{formik.errors.email}</small> : null}
                {dupEmail ? <small className={classes.Invalid}>Email is already taken!</small> : null}
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
                    name='password'
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <small className={classes.InputPrompt}>8 - 50 mix letters and numbers</small>
                {formik.errors.password && formik.touched.password ? <small className={classes.Invalid}>{formik.errors.password}</small> : null}
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
                    name='cpassword'
                    placeholder='Confirm Password'
                    value={formik.values.cpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.cpassword && formik.touched.cpassword ? <small className={classes.Invalid}>{formik.errors.cpassword}</small> : null}
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
                    name='fname'
                    placeholder='First Name'
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <small className={classes.InputPrompt}>2 - 50 characters</small>
                {formik.errors.fname && formik.touched.fname ? <small className={classes.Invalid}>{formik.errors.fname}</small> : null}
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
                    name='lname'
                    placeholder='Last Name'
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <small className={classes.InputPrompt}>2 - 50 characters</small>
                {formik.errors.lname && formik.touched.lname ? <small className={classes.Invalid}>{formik.errors.lname}</small> : null}
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
                    name='dob'
                    placeholder='Birth Date'
                    value={formik.values.dob}
                    min='1940-01-01'
                    max='2015-12-31'
                    onKeyPress={() => false}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <small className={classes.InputPrompt}>Min 1940 | Max 2015</small>
                {formik.errors.dob && formik.touched.dob ? <small className={classes.Invalid}>{formik.errors.dob}</small> : null}
            </div>

            <div className={classes.Submit}>
                {
                    loading ? <Spinner size={50} /> : null
                }
                <pre>
                    
                </pre>
                <OutlineButton tone={BtnTone.light} submit disabled={!formik.dirty || !formik.isValid}>
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
        </form>
    );
}


export default Register;