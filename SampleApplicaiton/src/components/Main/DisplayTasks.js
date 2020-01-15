"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const Task_1 = require("./Task");
const GET_API = location.protocol + '//' + location.host + '/api/task/';
class DisplayTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: null,
        };
    }
    render() {
        return (React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, null, (this.state.tasks != null && this.state.tasks.length != 0) ? this.state.tasks.map((task) => React.createElement(Task_1.default, { key: task.id, task: task })) : React.createElement("div", null, "No Task"))));
    }
    componentDidMount() {
        fetch(GET_API, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }))
            .catch(error => console.log(error));
    }
}
exports.default = DisplayTask;
//# sourceMappingURL=DisplayTasks.js.map