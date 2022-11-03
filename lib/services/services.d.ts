import { WebPartContext } from "@microsoft/sp-webpart-base";
export declare const getAnswer: (context: WebPartContext, email: string) => Promise<any[]>;
export declare const submit: (context: WebPartContext, email: string, name: string, AnswerSurvey: boolean, Ans1: string, Ans2: string, Ans3: string, Ans4: string) => Promise<void>;
//# sourceMappingURL=services.d.ts.map