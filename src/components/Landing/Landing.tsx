import classes from './Landing.module.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../assests/images/logo-react.png';
import OutlineButton from '../UI/OutilneButton/OutlineButton';


const Landing = () => (
    <Fragment>
        <section className={classes.HeadSection}>
            <h1>Welcom to
                <span className={classes.Icon}> RBlogz</span>
            </h1>
            <h2>A Blogging Website made better with
                <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
                    <img className={classes.Rlogo} src={reactLogo} alt='react-logo' />
                </a>
                ReactJS.
            </h2>
        </section>
        <section className={classes.BodySection}>
            <Link to='register'>
                <OutlineButton light>Register Now!</OutlineButton>
            </Link>
            <small>
                to start Blogging
            </small>
            <div className={classes.Or}>
                <div></div>
                OR
                <div></div>
            </div>
            <Link to='login'>
                <OutlineButton light>Login</OutlineButton>
            </Link>
            <small>
                if you already have an account
            </small>
            <h3>Happy Blogging</h3>
        </section>
        <section className={classes.BottomSection}>
            <h1>Important Note</h1>
            <p>
                This site is purely a personal project. Please, don't Post
                any <b>Sensitive data</b> that might affect your privacy.
            </p>
        </section>
    </Fragment>
);

export default Landing;