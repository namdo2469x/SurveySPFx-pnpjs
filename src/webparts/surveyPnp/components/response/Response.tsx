/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import styles from '../SurveyPnp.module.scss';

const Response = (props: { ques1: string, ques2: string, ques3: string, ques4: string }) => {
    return (
        <div className={styles.response}>
            {props.ques1 !== null ? (<p><b>Question 1:</b> {props.ques1}</p>) : ''}
            {props.ques2 !== null ? (<p><b>Question 2:</b> {props.ques2}</p>) : ''}
            {props.ques3 !== null ? (<p><b>Question 3:</b> {props.ques3}</p>) : ''}
            {props.ques4 !== null ? (<p><b>Question 4:</b> {props.ques4}</p>) : ''}
        </div>
    )
}

export default Response