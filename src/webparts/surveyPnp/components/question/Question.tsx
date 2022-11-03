/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import styles from '../SurveyPnp.module.scss';
import { defaultDatePickerStrings, Rating, RatingSize } from '@fluentui/react';
import { Checkbox, DatePicker } from '@fluentui/react';
import { ISurveyPnpProps } from '../ISurveyPnpProps';
import { submit } from '../../../../services/services';

var checkOption: any[] = []
var str: string

const Question = (props: ISurveyPnpProps) => {
    const [ques1, setQues1] = React.useState(true)
    const [ques2, setQues2] = React.useState(false)
    const [checkCond, setCheckCond] = React.useState(false)
    const [ques3, setQues3] = React.useState(false)
    const [ques4, setQues4] = React.useState(false)
    const [complete, setComplete] = React.useState(false)
    const [birthday, setBirthDay] = React.useState({ year: '', month: '' })

    interface ICheckboxInput {
        ID?: number;
        Title: string;
        isChecked?: boolean;
    }
    const option: ICheckboxInput[] = [
        { ID: 1, Title: 'C#' },
        { ID: 2, Title: 'Java' },
        { ID: 3, Title: 'PHP' },
        { ID: 4, Title: 'Python' },
        { ID: 5, Title: 'R' }
    ]

    /* var Ans1: string = null
    var Ans2: string = null
    var Ans3: string = null
    var Ans4: string = null */
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
            console.log(Ans1)
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
            for (var i = 0; i < checkOption.length; i++) {
                if (checkOption[i] === e.currentTarget.title) {
                    checkOption.splice(i, 1);
                    setAns2(checkOption)
                }
            }
        }
        console.log(Ans2)
    }

    const handleDatePicker = (e: Date) => {
        var date = new Date();
        var date1 = e
        date1.getFullYear()
        setBirthDay({ year: ((date.getFullYear() - date1.getFullYear())).toString(), month: (date.getMonth() - date1.getMonth() + 1).toString() })
        setAns3("You are " + birthday.year + " and " + birthday.month + " months old")
        console.log(Ans3)
        console.log(birthday.year, " & ", birthday.month)
    }

    const handleRating = (e: any, rating: number) => {
        setAns4(rating.toString())
        console.log(Ans4)
    }

    const submitSurvey = async () => {
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
                                    option.map((checkBoxItem: ICheckboxInput, index: number) => {
                                        return (
                                            <Checkbox key={index} defaultChecked={checkBoxItem.isChecked} label={checkBoxItem.Title} title={checkBoxItem.Title} onChange={handleCheckBox} />
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
                                <label>You are {birthday.year} years and {birthday.month} months old</label>
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
                        You have completed the survey <br />
                        Thank you!
                        Reload to view you response
                    </div>
                )
            }

        </div>
    )
}

export default Question