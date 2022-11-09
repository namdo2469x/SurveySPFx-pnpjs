var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
import * as dayjs from 'dayjs';
import { getAnswer } from '../../../services/services';
import Question from './question/Question';
import Response from './response/Response';
var SurveyPnp = function (props) {
    var _a = React.useState({ email: props.context.pageContext.user.email, name: props.context.pageContext.user.displayName }), user = _a[0], setUser = _a[1];
    var _b = React.useState(dayjs(Date()).format('DD/MM/YYYY - HH:mm:ss')), time = _b[0], setTime = _b[1];
    var _c = React.useState(false), question = _c[0], setQuestion = _c[1];
    var _d = React.useState(false), openQuestion = _d[0], setOpenQuestion = _d[1];
    var _e = React.useState(false), openResponse = _e[0], setOpenResponse = _e[1];
    var _f = React.useState(""), Ans1 = _f[0], setAns1 = _f[1];
    var _g = React.useState(""), Ans2 = _g[0], setAns2 = _g[1];
    var _h = React.useState(""), Ans3 = _h[0], setAns3 = _h[1];
    var _j = React.useState(""), Ans4 = _j[0], setAns4 = _j[1];
    var getAnswerList = function () { return __awaiter(void 0, void 0, void 0, function () {
        var items, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAnswer(props.context, user.email)];
                case 1:
                    items = _a.sent();
                    for (i = 0; i < items.length; ++i) {
                        setAns1(items[i]['AnswerOne']);
                        setAns2(items[i]['AnswerTwo']);
                        setAns3(items[i]['AnswerThree']);
                        setAns4(items[i]['AnswerFour']);
                        setQuestion(items[i]['AnswerSurvey']);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var ShowSurvey = function () {
        setOpenQuestion(true);
    };
    var ShowResponse = function () {
        if (openResponse === true) {
            setOpenResponse(false);
        }
        else
            setOpenResponse(true);
    };
    React.useEffect(function () {
        getAnswerList();
        setInterval(function () {
            setTime(dayjs(Date()).format('DD/MM/YYYY - HH:mm:ss'));
        }, 1000);
    }, [question]);
    return (React.createElement("div", { className: styles.container },
        React.createElement("div", { className: styles.header },
            React.createElement("div", { className: styles.info },
                React.createElement("label", null,
                    React.createElement("b", null, "Email:"),
                    " ",
                    user.email),
                React.createElement("label", null,
                    React.createElement("b", null, "Full Name:"),
                    " ",
                    user.name),
                React.createElement("label", null,
                    React.createElement("b", null, "Current Time:"),
                    " ",
                    time)),
            (question === false || question === undefined) ? React.createElement("button", { onClick: ShowSurvey }, "Start Survey") : React.createElement("button", { onClick: ShowResponse }, "View My Response")),
        openQuestion && React.createElement(Question, { context: props.context }),
        openResponse && React.createElement(Response, { ques1: Ans1, ques2: Ans2, ques3: Ans3, ques4: Ans4 })));
};
export default SurveyPnp;
//# sourceMappingURL=SurveyPnp.js.map