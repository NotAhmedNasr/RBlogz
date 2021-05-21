import React, { FC } from 'react'
import classes from './Spinner.module.css'

interface Props {
    size: number;
}

const Spinner: FC<Props> = ({size}) => (
    <div style={{width: (size + 'px'), height: (size + 'px'), margin: 'auto'}}>
        <div className={classes['sk-cube-grid']}>
            <div className={[classes['sk-cube'], classes['sk-cube1']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube2']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube3']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube4']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube5']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube6']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube7']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube8']].join(' ')}></div>
            <div className={[classes['sk-cube'], classes['sk-cube9']].join(' ')}></div>
        </div>
    </div>
)

export default Spinner;