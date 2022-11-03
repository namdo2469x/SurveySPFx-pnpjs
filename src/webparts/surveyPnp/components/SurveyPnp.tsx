/* eslint-disable react/self-closing-comp */
/* eslint-disable dot-notation */
/* eslint-disable no-var */
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
  const [question, setQuestion] = React.useState({ answered: false, ques1: '', ques2: '', ques3: '', ques4: '' })
  const [openQuestion, setOpenQuestion] = React.useState(false)
  const [openResponse, setOpenResponse] = React.useState(false)

  const [Ans1, setAns1] = React.useState("")
  const [Ans2, setAns2] = React.useState("")
  const [Ans3, setAns3] = React.useState("")
  const [Ans4, setAns4] = React.useState("")

  const getAnswerList = async () => {
    const items = await getAnswer(props.context, user.email)
    var output1: string[] = [];
    var output2: string[] = [];
    var output3: string[] = [];
    var output4: string[] = [];
    var output5: boolean
    for (var i = 0; i < items.length; ++i) {
      output1 = items[i]['AnswerOne']
      output2 = items[i]['AnswerTwo']
      output3 = items[i]['AnswerThree']
      output4 = items[i]['AnswerFour']
      output5 = items[i]['AnswerSurvey']
    }
    console.log(items)
    setQuestion({ answered: output5, ques1: output1.toString(), ques2: output2.toString(), ques3: output3.toString(), ques4: output4.toString() })
    console.log("asdasd", question)
  }

  const ShowSurvey = () => {
    setOpenQuestion(true)
  }

  const ShowResponse = () => {
    setOpenResponse(true)
  }

  React.useEffect(() => {
    getAnswerList()
    setInterval(() => {
      setTime(dayjs(Date()).format('DD/MM/YYYY - HH:mm:ss'))
    }, 1000)

  }, [question.answered])


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.info}>
          <label><b>Email:</b> {user.email}</label>
          <label><b>Full Name:</b> {user.name}</label>
          <label><b>Current Time:</b> {time}</label>
        </div>
        {question.answered === false ? (<button onClick={ShowSurvey}>Start Survey</button>) : <button onClick={ShowResponse}>View My Response</button>}
      </div>
      {openQuestion && <Question context={props.context}></Question>}
      {openResponse && <Response ques1={question.ques1} ques2={question.ques2} ques3={question.ques3} ques4={question.ques4}></Response>}
    </div>
  )
}

export default SurveyPnp