"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const UpdateTaskModal_1 = require("./UpdateTaskModal");
const DELETE_API = location.protocol + '//' + location.host + '/api/task/';
class Task extends React.Component {
    constructor(props) {
        super(props);
        this.reloadPage = () => {
            window.location.reload();
        };
        this.openUpdateModal = (id) => { this.setState({ showUpdateModal: true, id: id }); };
        this.closeUpdateModal = () => { this.setState({ showUpdateModal: false }); };
        this.deleteTask = (id) => {
            fetch(DELETE_API + id, {
                method: 'DELETE'
            });
            this.reloadPage();
        };
        this.state = {
            showUpdateModal: false,
            id: null,
        };
    }
    render() {
        const { task } = this.props;
        return (React.createElement("div", null,
            React.createElement(react_bootstrap_1.Accordion, { defaultActiveKey: "0" },
                React.createElement(react_bootstrap_1.Card, null,
                    React.createElement(react_bootstrap_1.Card.Header, null,
                        React.createElement(react_bootstrap_1.Accordion.Toggle, { as: react_bootstrap_1.Button, variant: "link", eventKey: task.id }, task.name),
                        React.createElement(react_bootstrap_1.Button, { className: "ml-5", variant: "warning", onClick: () => this.openUpdateModal(task.id) }, "Update"),
                        React.createElement(react_bootstrap_1.Button, { className: "ml-2", variant: "danger", onClick: () => this.deleteTask(task.id) }, "Delete")),
                    React.createElement(react_bootstrap_1.Accordion.Collapse, { eventKey: task.id },
                        React.createElement(react_bootstrap_1.Card.Body, null, task.description)))),
            React.createElement(UpdateTaskModal_1.default, { show: this.state.showUpdateModal, onHide: this.closeUpdateModal, reload: this.reloadPage, taskId: this.state.id })));
    }
}
exports.default = Task;
//# sourceMappingURL=Task.js.map