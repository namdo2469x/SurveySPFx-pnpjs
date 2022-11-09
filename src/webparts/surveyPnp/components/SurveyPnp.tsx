/* eslint-disable react/self-closing-comp */
/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import styles from './SurveyPnp.module.scss';
import { ISurveyPnpProps } from './ISurveyPnpProps';
import * as dayjs from 'dayjs'
import { initializeIcons } from '@fluentui/font-icons-mdl2';


import { getAnswer } from '../../../services/services';
import Question from './question/Question';
import Response from './response/Response';

const SurveyPnp = (props: ISurveyPnpProps) => {
  const [user, setUser] = React.useState({ email: props.context.pageContext.user.email, name: props.context.pageContext.user.displayName })
  const [time, setTime] = React.useState(dayjs(Date()).format('DD/MM/YYYY - HH:mm:ss'));
  const [question, setQuestion] = React.useState(false)
  const [openQuestion, setOpenQuestion] = React.useState(false)
  const [openResponse, setOpenResponse] = React.useState(false)

  const [Ans1, setAns1] = React.useState("")
  const [Ans2, setAns2] = React.useState("")
  const [Ans3, setAns3] = React.useState("")
  const [Ans4, setAns4] = React.useState("")

  const getAnswerList = async () => {
    const items = await getAnswer(props.context, user.email)
    for (let i = 0; i < items.length; ++i) {
      setAns1(items[i]['AnswerOne'])
      setAns2(items[i]['AnswerTwo'])
      setAns3(items[i]['AnswerThree'])
      setAns4(items[i]['AnswerFour'])
      setQuestion(items[i]['AnswerSurvey'])
    }
  }

  const ShowSurvey = () => {
    setOpenQuestion(true)
  }

  const ShowResponse = () => {
    if (openResponse === true) {
      setOpenResponse(false)
    }
    else
      setOpenResponse(true)
  }

  React.useEffect(() => {
    getAnswerList()
    setInterval(() => {
      setTime(dayjs(Date()).format('DD/MM/YYYY - HH:mm:ss'))
    }, 1000)

  }, [question])


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.info}>
          <label><b>Email:</b> {user.email}</label>
          <label><b>Full Name:</b> {user.name}</label>
          <label><b>Current Time:</b> {time}</label>
        </div>
        {(question === false || question === undefined) ? <button onClick={ShowSurvey}>Start Survey</button> : <button onClick={ShowResponse}>View My Response</button>}
      </div>
      {openQuestion && <Question context={props.context} ></Question>}
      {openResponse && <Response ques1={Ans1} ques2={Ans2} ques3={Ans3} ques4={Ans4}></Response>}
    </div>
  )
}

export default SurveyPnp