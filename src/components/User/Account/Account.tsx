import classes from './Account.module.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ImageCircle from '../../UI/ImageCircle/ImageCircle';
import ProfileImg from '../../../assests/images/Profile.png'
import Info from '../../UI/Info/Info';
import { IconContext } from 'react-icons/lib';
import { FcAddDatabase, FcAddressBook, FcBusinessman, FcCalendar, FcCamera, FcDeleteDatabase, FcInfo, FcSettings } from 'react-icons/fc';
import User from '../../../Models/User';
import { getOne } from '../../../Services/UserService';
import Spinner from '../../UI/Spinner/Spinner';

interface Params {
    id: string,
}

const Account = () => {
    const { id }: Params = useParams();
    const [user, setUser] = useState<User>();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getOne(id).then(res => {
            setUser(res.data);
            setLoaded(true);
        }).catch(err => {
            console.log(err);
        });
    }, [id]);

    const rendered = loaded ?
        (<div className={classes.Account}>
            <div className={classes.Wrapper}>
                <section className={classes.Top}>
                    <div>
                        <h2>{`${user?.firstname} ${user?.lastname}`}</h2>
                    </div>
                    <div></div>
                    <div>
                        <h2>{`@${user?.username}`}</h2>
                    </div>
                    <div className={classes.ImageWrapper}>
                        <ImageCircle url={user?.profilePic || ProfileImg} passedClass={classes.Image} />
                        <i className={classes.EditImg}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcCamera />
                            </IconContext.Provider>
                        </i>
                        <i className={classes.Follow}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcAddDatabase />
                            </IconContext.Provider>
                        </i>
                        <i className={classes.Follow}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcDeleteDatabase />
                            </IconContext.Provider>
                        </i>
                    </div>
                </section>
                <section className={classes.InfoWrapper}>
                    <div className={classes.Info}>
                        <Info text={`${user?.firstname} ${user?.lastname}`}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcBusinessman />
                            </IconContext.Provider>
                        </Info>
                        <Info text={`${user?.email}`}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcAddressBook />
                            </IconContext.Provider>
                        </Info>
                        <Info text={`Birth Date: ${(new Date(user?.birthDate || '1/1/1940')).toLocaleDateString()}`}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcCalendar />
                            </IconContext.Provider>
                        </Info>
                        <Info text={`Join Date: ${(new Date(user?.createdAt!)).toLocaleDateString()}`}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcCalendar />
                            </IconContext.Provider>
                        </Info>
                        <div className={classes.InfoIcon}>
                            <IconContext.Provider value={{ size: '2rem' }}>
                                <FcInfo />
                            </IconContext.Provider>
                        </div>
                        <div className={classes.EditIcon}>
                            <IconContext.Provider value={{ size: '2rem' }}>
                                <FcSettings />
                            </IconContext.Provider>
                        </div>
                    </div>
                </section>
            </div>
            <section className={classes.Blogs}>
                <div className={classes.Heading}>
                    <h1>Latest Blogs</h1>
                </div>
            </section>
        </div>) : (
            <div style={{ margin: '200px auto' }}>
                <Spinner size={200} />
            </div>
        );

    return rendered;
}

export default Account;