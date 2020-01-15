"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const PUT_API = location.protocol + '//' + location.host + '/api/task/';
class UpdateTaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.observingUpdateName = (e) => { this.setState({ updateName: e.target.value }); };
        this.observingUpdateDes = (e) => { this.setState({ updateDes: e.target.value }); };
        this.updateTask = (id) => {
            let task = {
                "ID": id,
                "name": this.state.updateName,
                "description": this.state.updateDes
            };
            fetch(PUT_API + id, {
                method: "PUT",
                body: JSON.stringify(task),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .catch(error => console.log(error));
            this.props.reload();
        };
        this.state = {
            updateName: "",
            updateDes: ""
        };
    }
    render() {
        const { updateName, updateDes } = this.state;
        const { onHide, taskId } = this.props;
        return (React.createElement(react_bootstrap_1.Modal, Object.assign({}, this.props, { size: "lg", "aria-labelledby": "contained-modal-title-vcenter", centered: true }),
            React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                React.createElement(react_bootstrap_1.Modal.Title, { id: "contained-modal-title-vcenter" }, "Update Task")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement(react_bootstrap_1.InputGroup, { className: "mb-3" },
                    React.createElement(react_bootstrap_1.InputGroup.Prepend, null,
                        React.createElement(react_bootstrap_1.InputGroup.Text, { id: "basic-addon1" }, "Name")),
                    React.createElement(react_bootstrap_1.FormControl, { placeholder: "Name", "aria-label": "Name", value: updateName, onChange: (e) => this.observingUpdateName(e), "aria-describedby": "basic-addon1" })),
                React.createElement(react_bootstrap_1.InputGroup, null,
                    React.createElement(react_bootstrap_1.InputGroup.Prepend, null,
                        React.createElement(react_bootstrap_1.InputGroup.Text, null, "Description")),
                    React.createElement(react_bootstrap_1.FormControl, { as: "textarea", "aria-label": "Description", value: updateDes, onChange: (e) => this.observingUpdateDes(e) }))),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement(react_bootstrap_1.Button, { variant: "warning", disabled: updateName == "" || updateDes == "", onClick: () => this.updateTask(taskId) }, "Update"),
                React.createElement(react_bootstrap_1.Button, { variant: "outline-warning", onClick: onHide }, "Cancel"))));
    }
}
exports.default = UpdateTaskModal;
//# sourceMappingURL=UpdateTaskModal.js.map