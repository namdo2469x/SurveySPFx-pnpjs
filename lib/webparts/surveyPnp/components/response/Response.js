/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import styles from '../SurveyPnp.module.scss';
var Response = function (props) {
    return (React.createElement("div", { className: styles.response },
        React.createElement("p", null,
            React.createElement("b", null, "Question 1:"),
            " ",
            props.ques1),
        React.createElement("p", null,
            React.createElement("b", null, "Question 2:"),
            " ",
            props.ques2),
        React.createElement("p", null,
            React.createElement("b", null, "Question 3:"),
            " ",
            props.ques3),
        React.createElement("p", null,
            React.createElement("b", null, "Question 4:"),
            " ",
            props.ques4)));
};
export default Response;
//# sourceMappingURL=Response.js.map