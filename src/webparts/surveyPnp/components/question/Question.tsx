/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import styles from '../SurveyPnp.module.scss';
import { defaultDatePickerStrings, Rating, RatingSize } from '@fluentui/react';
import { Checkbox, DatePicker } from '@fluentui/react';
import { submit } from '../../../../services/services';
import { ISurveyPnpProps } from '../ISurveyPnpProps';

let checkOption: any[] = []

const Question = (props: ISurveyPnpProps) => {
    const [ques1, setQues1] = React.useState(true)
    const [ques2, setQues2] = React.useState(false)
    const [checkCond, setCheckCond] = React.useState(false)
    const [ques3, setQues3] = React.useState(false)
    const [ques4, setQues4] = React.useState(false)
    const [complete, setComplete] = React.useState(false)
    const [year, setYear] = React.useState('')
    const [month, setMonth] = React.useState('')
    const [option, setOption] = React.useState(
        [{ ID: 1, Title: 'C#' },
        { ID: 2, Title: 'Java' },
        { ID: 3, Title: 'PHP' },
        { ID: 4, Title: 'Python' },
        { ID: 5, Title: 'R' }])

    const [Ans1, setAns1] = React.useState("")
    const [Ans2, setAns2] = React.useState([])
    const [Ans3, setAns3] = React.useState("")
    const [Ans4, setAns4] = React.useState("")


    const showQues2 = () => {
        if (ques2 === false) {
            setQues2(true)
            setQues1(false)
            setAns1('Go to Question 2')
            console.log(Ans1)
        }
        else if (ques2 === true) {
            setQues2(false)
            setQues1(true)
            checkOption = []
        }
    }

    const showQues3 = () => {
        if (ques3 === true && ques1 === false && checkCond === false) {
            setQues3(false)
            setQues1(true)
        }
        else if (ques1 === true && ques3 === false && checkCond === false) {
            setQues1(false)
            setQues3(true)
            setAns1('Go to Question 3')
        }
        else if (ques3 === false && ques2 === true && checkCond === false) {
            setQues3(true)
            setQues2(false)
            setCheckCond(true)
        }
        else if (ques3 === true && ques2 === false && checkCond === true) {
            setQues2(true)
            setQues3(false)
            setCheckCond(false)
            checkOption = []
        }
    }

    const showQues4 = () => {
        if (ques4 === true) {
            setQues3(true)
            setQues4(false)
        }
        else {
            setQues4(true)
            setQues3(false)
        }
    }

    const handleCheckBox = (e: any, isChecked: boolean) => {
        if (isChecked) {
            checkOption.push(e.currentTarget.title)
            setAns2(checkOption)
        }
        else if (!isChecked) {
            for (let i = 0; i < checkOption.length; i++) {
                if (checkOption[i] === e.currentTarget.title) {
                    checkOption.splice(i, 1);
                    setAns2(checkOption)
                }
            }
        }
    }

    const handleDatePicker = (e: Date) => {
        let date = new Date();
        let date1 = e
        date1.getFullYear()
        setAns3("You are " + (date.getFullYear() - date1.getFullYear()).toString() + " years and " + (date.getMonth() - date1.getMonth() + 1).toString() + " months old")
        setYear(((date.getFullYear() - date1.getFullYear())).toString())
        setMonth((date.getMonth() - date1.getMonth() + 1).toString())
    }

    const handleRating = (e: any, rating: number) => {
        setAns4(`${rating.toString()} stars`)
        console.log(Ans4)
    }

    const submitSurvey = async () => {
        await submit(props.context, props.context.pageContext.user.email, props.context.pageContext.user.displayName, true, Ans1, Ans2.toString(), Ans3, Ans4)
        setComplete(true)
        setQues4(false)
    }

    return (
        <div className={styles.question}>
            {ques1 &&
                (
                    <div>
                        <div className={styles.item}>
                            <div>
                                <h2>Question 1</h2>
                                <p>If you select Answer A, your next question will be Question 2. <br />
                                    If you select Answer B, your next question will be Question 3.</p>
                            </div>
                            <div>
                                <button onClick={showQues2}>Answer A, <br /> Go to Question 2</button>
                                <button onClick={showQues3}>Answer B, <br /> Go to Question 3</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {ques2 &&
                (
                    <div>
                        <div className={styles.item}>
                            <div>
                                <h2>Question 2</h2>
                                <p>What are your favorite programming languages? Please select 2.</p>
                            </div>
                            <div>
                                {
                                    option.map((item, index: number) => {
                                        return (
                                            <Checkbox key={index} label={item.Title} title={item.Title} onChange={handleCheckBox} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.buttongroup}>
                            <button onClick={showQues2}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M14 6l-6 6l6 6v-12"></path>
                                </svg>
                            </button>
                            <button onClick={showQues3}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 18l6 -6l-6 -6v12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            }

            {ques3 &&
                (
                    <div>
                        <div className={styles.item}>
                            <div>
                                <h2>Question 3</h2>
                                <p>When is your birthday?</p>
                            </div>
                            <div>
                                <DatePicker
                                    placeholder='Select a date...'
                                    showWeekNumbers={true}
                                    strings={defaultDatePickerStrings}
                                    showMonthPickerAsOverlay={true}
                                    onSelectDate={handleDatePicker}
                                />
                                <label>You are {year} years and {month} months old</label>
                            </div>
                        </div>
                        <div className={styles.buttongroup}>
                            <button onClick={showQues3}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M14 6l-6 6l6 6v-12"></path>
                                </svg>
                            </button>
                            <button onClick={showQues4}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 18l6 -6l-6 -6v12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            }

            {ques4 &&
                (
                    <div>
                        <div className={styles.item}>
                            <div>
                                <h2>Question 4</h2>
                                <p>Please rate this survey</p>
                            </div>
                            <div>
                                <Rating
                                    max={5}
                                    size={RatingSize.Large}
                                    defaultRating={0}
                                    onChange={handleRating}
                                />
                            </div>
                        </div>
                        <div className={styles.buttongroup}>
                            <button onClick={showQues4}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M14 6l-6 6l6 6v-12"></path>
                                </svg>
                            </button>
                            <button onClick={submitSurvey}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 18l6 -6l-6 -6v12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            }
            {complete &&
                (
                    <div>
                        <h2>
                            You have completed the survey
                            <br />
                            Thank you!
                            <br />
                            Reload the page to view your response
                        </h2>
                    </div>
                )
            }

        </div>
    )
}

export default Question