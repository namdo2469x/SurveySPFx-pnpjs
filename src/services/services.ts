/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPartContext } from "@microsoft/sp-webpart-base"
import { SPFI } from "@pnp/sp"
import { getSP } from "./pnpjsconfig"

export const getAnswer = async (context: WebPartContext, email: string) => {
  let _sp: SPFI = getSP(context)
  const items = _sp.web.lists
    .getByTitle("Survey")
    .items.select()
    .filter(`Title eq '${email}'`)
    .getAll()

  return items
}

export const submit = async (
  context: WebPartContext,
  email: string,
  name: string,
  AnswerSurvey: boolean,
  Ans1: string,
  Ans2: string,
  Ans3: string,
  Ans4: string
) => {
  let _sp: SPFI = getSP(context)
  await _sp.web.lists.getByTitle("Survey").items.add({
    Title: email,
    FullName: name,
    AnswerSurvey:AnswerSurvey,
    AnswerOne: Ans1,
    AnswerTwo:Ans2,
    AnswerThree:Ans3,
    AnswerFour:Ans4
  })
}
