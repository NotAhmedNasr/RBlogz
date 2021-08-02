import classes from './People.module.css';
import React, { FC, useEffect, useState } from 'react'
import UserCards from '../User/UserCards/UserCards'
import { getMany } from '../../Services/UserService';
import Spinner from '../UI/Spinner/Spinner';

const People: FC = () => {
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getMany(0, 50).then(res => {
            setLoading(false);
            setUsersList(res.data);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        });
        
    }, [])

    const rendered = !loading ? (
        <div className={classes.People}>
            <UserCards users={usersList} />
        </div>
    ) : (
        <div>
            <Spinner size={200}/>
        </div>
    )

    return rendered;
}

export default People;