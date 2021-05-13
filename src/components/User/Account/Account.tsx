import classes from './Account.module.css';
import React from 'react';
import { useParams } from 'react-router';
import ImageCircle from '../../UI/ImageCircle/ImageCircle';
import ProfileImg from '../../../assests/images/Profile.png'
import Info from '../../UI/Info/Info';
import { IconContext } from 'react-icons/lib';
import { FcAddDatabase, FcAddressBook, FcBusinessman, FcCalendar, FcCamera, FcDeleteDatabase, FcInfo, FcSettings } from 'react-icons/fc';

interface Params {
    id: string,
}

const Account = () => {

    const { id }: Params = useParams();
    const user = {
        username: 'ahmedali123',
        firstname: 'Ahmed',
        lastname: 'Ali',
        email: 'ahmed@mail.com',
        birthDate: new Date(1993, 8, 22),
        createdAt: new Date(),
    }
    return (
        <div className={classes.Account}>
            <div className={classes.Wrapper}>
                <section className={classes.Top}>
                    <div>
                        <h2>{`${user.firstname} ${user.lastname}`}</h2>
                    </div>
                    <div></div>
                    <div>
                        <h2>{`@${user.username}`}</h2>
                    </div>
                    <div className={classes.ImageWrapper}>
                        <ImageCircle url={ProfileImg} passedClass={classes.Image} />
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
                        <Info text={`${user.firstname} ${user.lastname}`}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcBusinessman />
                            </IconContext.Provider>
                        </Info>
                        <Info text={`${user.email}`}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcAddressBook />
                            </IconContext.Provider>
                        </Info>
                        <Info text={`Birth Date: ${user.birthDate.toLocaleDateString()}`}>
                            <IconContext.Provider value={{ size: '1.5em' }}>
                                <FcCalendar />
                            </IconContext.Provider>
                        </Info>
                        <Info text={`Join Date: ${user.createdAt.toLocaleDateString()}`}>
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
        </div>
    );
}

export default Account;