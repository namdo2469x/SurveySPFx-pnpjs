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
import { submit } from '../../../../services/services';
var checkOption = [];
var str;
var Question = function (props) {
    var _a = React.useState(true), ques1 = _a[0], setQues1 = _a[1];
    var _b = React.useState(false), ques2 = _b[0], setQues2 = _b[1];
    var _c = React.useState(false), checkCond = _c[0], setCheckCond = _c[1];
    var _d = React.useState(false), ques3 = _d[0], setQues3 = _d[1];
    var _e = React.useState(false), ques4 = _e[0], setQues4 = _e[1];
    var _f = React.useState(false), complete = _f[0], setComplete = _f[1];
    var _g = React.useState({ year: '', month: '' }), birthday = _g[0], setBirthDay = _g[1];
    var option = [
        { ID: 1, Title: 'C#' },
        { ID: 2, Title: 'Java' },
        { ID: 3, Title: 'PHP' },
        { ID: 4, Title: 'Python' },
        { ID: 5, Title: 'R' }
    ];
    /* var Ans1: string = null
    var Ans2: string = null
    var Ans3: string = null
    var Ans4: string = null */
    var _h = React.useState(null), Ans1 = _h[0], setAns1 = _h[1];
    var _j = React.useState(null), Ans2 = _j[0], setAns2 = _j[1];
    var _k = React.useState(null), Ans3 = _k[0], setAns3 = _k[1];
    var _l = React.useState(null), Ans4 = _l[0], setAns4 = _l[1];
    var showQues2 = function () {
        if (ques2 === false) {
            setQues2(true);
            setQues1(false);
            setAns1('Go to Question 2');
            console.log(Ans1);
        }
        else if (ques2 === true) {
            setQues2(false);
            setQues1(true);
        }
    };
    var showQues3 = function () {
        if (ques3 === true && ques1 === false && checkCond === false) {
            setQues3(false);
            setQues1(true);
        }
        else if (ques1 === true && ques3 === false && checkCond === false) {
            setQues1(false);
            setQues3(true);
            setAns1('Go to Question 3');
            console.log(Ans1);
        }
        else if (ques3 === false && ques2 === true && checkCond === false) {
            setQues3(true);
            setQues2(false);
            setCheckCond(true);
        }
        else if (ques3 === true && ques2 === false && checkCond === true) {
            setQues2(true);
            setQues3(false);
            setCheckCond(false);
        }
    };
    var showQues4 = function () {
        if (ques4 === true) {
            setQues3(true);
            setQues4(false);
        }
        else {
            setQues4(true);
            setQues3(false);
        }
    };
    var handleCheckBox = function (e, isChecked) {
        if (isChecked) {
            checkOption.push(e.currentTarget.title);
            str = checkOption.join();
            setAns2(str);
        }
        else if (!isChecked) {
            for (var i = 0; i < checkOption.length; i++) {
                if (checkOption[i] === e.currentTarget.title) {
                    checkOption.splice(i, 1);
                    str = checkOption.join();
                    setAns2(str);
                }
            }
        }
        console.log(Ans2);
    };
    var handleDatePicker = function (e) {
        var date = new Date();
        var date1 = e;
        date1.getFullYear();
        setBirthDay({ year: ((date.getFullYear() - date1.getFullYear())).toString(), month: (date.getMonth() - date1.getMonth() + 1).toString() });
        setAns3("You are " + birthday.year + " and " + birthday.month + " months old");
        console.log(Ans3);
        console.log(birthday.year, " & ", birthday.month);
    };
    var handleRating = function (e, rating) {
        setAns4(rating.toString());
        console.log(Ans4);
    };
    var submitSurvey = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, submit(props.context, props.context.pageContext.user.email, props.context.pageContext.user.displayName, true, Ans1, Ans2, Ans3, Ans4)];
                case 1:
                    _a.sent();
                    setQues4(false);
                    setComplete(true);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: styles.question },
        ques1 &&
            (React.createElement("div", null,
                React.createElement("div", { className: styles.item },
                    React.createElement("div", null,
                        React.createElement("h2", null, "Question 1"),
                        React.createElement("p", null,
                            "If you select Answer A, your next question will be Question 2. ",
                            React.createElement("br", null),
                            "If you select Answer B, your next question will be Question 3.")),
                    React.createElement("div", null,
                        React.createElement("button", { onClick: showQues2 },
                            "Answer A, ",
                            React.createElement("br", null),
                            " Go to Question 2"),
                        React.createElement("button", { onClick: showQues3 },
                            "Answer B, ",
                            React.createElement("br", null),
                            " Go to Question 3"))))),
        ques2 &&
            (React.createElement("div", null,
                React.createElement("div", { className: styles.item },
                    React.createElement("div", null,
                        React.createElement("h2", null, "Question 2"),
                        React.createElement("p", null, "What are your favorite programming languages? Please select 2.")),
                    React.createElement("div", null, option.map(function (checkBoxItem, index) {
                        return (React.createElement(Checkbox, { key: index, checked: checkBoxItem.isChecked, label: checkBoxItem.Title, title: checkBoxItem.Title, onChange: handleCheckBox }));
                    }))),
                React.createElement("div", { className: styles.buttongroup },
                    React.createElement("button", { onClick: showQues2 },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-caret-left", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                            React.createElement("path", { d: "M14 6l-6 6l6 6v-12" }))),
                    React.createElement("button", { onClick: showQues3 },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-caret-right", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                            React.createElement("path", { d: "M10 18l6 -6l-6 -6v12" })))))),
        ques3 &&
            (React.createElement("div", null,
                React.createElement("div", { className: styles.item },
                    React.createElement("div", null,
                        React.createElement("h2", null, "Question 3"),
                        React.createElement("p", null, "When is your birthday?")),
                    React.createElement("div", null,
                        React.createElement(DatePicker, { placeholder: 'Select a date...', showWeekNumbers: true, strings: defaultDatePickerStrings, showMonthPickerAsOverlay: true, onSelectDate: handleDatePicker }),
                        React.createElement("label", null,
                            "You are ",
                            birthday.year,
                            " years and ",
                            birthday.month,
                            " months old"))),
                React.createElement("div", { className: styles.buttongroup },
                    React.createElement("button", { onClick: showQues3 },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-caret-left", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                            React.createElement("path", { d: "M14 6l-6 6l6 6v-12" }))),
                    React.createElement("button", { onClick: showQues4 },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-caret-right", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                            React.createElement("path", { d: "M10 18l6 -6l-6 -6v12" })))))),
        ques4 &&
            (React.createElement("div", null,
                React.createElement("div", { className: styles.item },
                    React.createElement("div", null,
                        React.createElement("h2", null, "Question 4"),
                        React.createElement("p", null, "Please rate this survey")),
                    React.createElement("div", null,
                        React.createElement(Rating, { max: 5, size: RatingSize.Large, defaultRating: 0, onChange: handleRating }))),
                React.createElement("div", { className: styles.buttongroup },
                    React.createElement("button", { onClick: showQues4 },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-caret-left", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                            React.createElement("path", { d: "M14 6l-6 6l6 6v-12" }))),
                    React.createElement("button", { onClick: submitSurvey },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-caret-right", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
                            React.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                            React.createElement("path", { d: "M10 18l6 -6l-6 -6v12" })))))),
        complete &&
            (React.createElement("div", null,
                "You have completed the survey ",
                React.createElement("br", null),
                "Thank you! Reload to view you response"))));
};
export default Question;
//# sourceMappingURL=Question.js.map