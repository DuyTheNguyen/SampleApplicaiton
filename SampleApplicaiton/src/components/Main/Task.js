"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
class Task extends React.Component {
    render() {
        const { task } = this.props;
        return (React.createElement(react_bootstrap_1.Accordion, { defaultActiveKey: "0" },
            React.createElement(react_bootstrap_1.Card, null,
                React.createElement(react_bootstrap_1.Card.Header, null,
                    React.createElement(react_bootstrap_1.Accordion.Toggle, { as: react_bootstrap_1.Button, variant: "link", eventKey: task.id }, task.name),
                    React.createElement(react_bootstrap_1.Button, { className: "ml-5", variant: "warning" }, "Update"),
                    React.createElement(react_bootstrap_1.Button, { className: "ml-2", variant: "danger" }, "Delete")),
                React.createElement(react_bootstrap_1.Accordion.Collapse, { eventKey: task.id },
                    React.createElement(react_bootstrap_1.Card.Body, null, task.description)))));
    }
}
exports.default = Task;
//# sourceMappingURL=Task.js.map