"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const POST_API = location.protocol + '//' + location.host + '/api/task/';
class AddTaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.observingNewName = (e) => { this.setState({ newName: e.target.value }); };
        this.observingNewDes = (e) => { this.setState({ newDes: e.target.value }); };
        this.addTask = () => {
            let task = {
                "name": this.state.newName,
                "description": this.state.newDes
            };
            fetch(POST_API, {
                method: "POST",
                body: JSON.stringify(task),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .catch(error => console.log(error));
            this.props.reload();
        };
        this.state = {
            newName: "",
            newDes: "",
        };
    }
    render() {
        const { onHide } = this.props;
        const { newName, newDes } = this.state;
        return (React.createElement(react_bootstrap_1.Modal, Object.assign({}, this.props, { size: "lg", "aria-labelledby": "contained-modal-title-vcenter", centered: true }),
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, { id: "contained-modal-title-vcenter" }, "Add New Task")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement(react_bootstrap_1.InputGroup, { className: "mb-3" },
                    React.createElement(react_bootstrap_1.InputGroup.Prepend, null,
                        React.createElement(react_bootstrap_1.InputGroup.Text, { id: "basic-addon1" }, "Name")),
                    React.createElement(react_bootstrap_1.FormControl, { placeholder: "Name", "aria-label": "Name", value: newName, onChange: (e) => this.observingNewName(e), "aria-describedby": "basic-addon1" })),
                React.createElement(react_bootstrap_1.InputGroup, null,
                    React.createElement(react_bootstrap_1.InputGroup.Prepend, null,
                        React.createElement(react_bootstrap_1.InputGroup.Text, null, "Description")),
                    React.createElement(react_bootstrap_1.FormControl, { as: "textarea", "aria-label": "Description", value: newDes, onChange: (e) => this.observingNewDes(e) }))),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { variant: "primary", disabled: newName == "" || newDes == "", onClick: this.addTask }, "Add"),
                React.createElement(react_bootstrap_1.Button, { variant: "outline-primary", onClick: onHide }, "Cancel"))));
    }
}
exports.default = AddTaskModal;
//# sourceMappingURL=AddTaskModal.js.map