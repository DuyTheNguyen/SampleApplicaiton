"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DisplayTasks_1 = require("./DisplayTasks");
const TaskModal_1 = require("./TaskModal");
const react_bootstrap_1 = require("react-bootstrap");
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.reloadPage = () => {
            window.location.reload();
        };
        this.openAddModal = () => { this.setState({ showAddModal: true }); };
        this.closeAddModal = () => { this.setState({ showAddModal: false }); };
        this.state = { showAddModal: false };
    }
    render() {
        return (React.createElement(react_bootstrap_1.Container, { className: "p-5" },
            React.createElement(react_bootstrap_1.Row, { className: "pb-3" },
                React.createElement(react_bootstrap_1.Col, null,
                    React.createElement("h1", null, "Tasks Manager"))),
            React.createElement(react_bootstrap_1.Row, { className: "pb-1" },
                React.createElement(react_bootstrap_1.Col, null,
                    React.createElement(react_bootstrap_1.Button, { variant: "primary", onClick: this.openAddModal }, "Add New Task"))),
            React.createElement(DisplayTasks_1.default, null),
            React.createElement(TaskModal_1.default, { show: this.state.showAddModal, onHide: this.closeAddModal, reload: this.reloadPage, name: "Add" })));
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map