/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import styles from '../SurveyPnp.module.scss';

const Response = (props: {ques1:string, ques2:string,ques3:string,ques4:string}) => {
    return (
        <div className={styles.response}>
           <p><b>Question 1:</b> {props.ques1}</p>
           <p><b>Question 2:</b> {props.ques2}</p>
           <p><b>Question 3:</b> {props.ques3}</p>
           <p><b>Question 4:</b> {props.ques4}</p>
        </div>
    )
}

export default Response