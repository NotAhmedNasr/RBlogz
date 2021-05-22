import classes from './Tag.module.css'
import React, { FC } from 'react'

interface Props {
    text: string
}

const Tag: FC<Props> = ({text}) => {

    return (
        <div className={classes.Tag}>
            #
            <span className={classes.Text}>{text}</span>
        </div>
    )
}

export default Tag;