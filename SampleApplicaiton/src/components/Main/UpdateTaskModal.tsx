import * as React from 'react';
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';
const PUT_API = location.protocol + '//' + location.host + '/api/task/';

export interface Props{
    onHide: () => void;
    reload: () => void;
    show: boolean;
    taskId: number;
}

interface State{
    updateName: string;
    updateDes: string;
}

class UpdateTaskModal extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            updateName: "",
            updateDes: ""
        }
    }

    observingUpdateName = (e) => {this.setState({updateName: e.target.value})}
    observingUpdateDes = (e) => {this.setState({updateDes: e.target.value})}

    updateTask = (id) => {
        let task = {
            "ID": id,
            "name": this.state.updateName,
            "description": this.state.updateDes
        }
        console.log(PUT_API+ id);
        fetch(PUT_API + id, {
            method:"PUT",
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))
        
        this.props.reload();
    }

    render(){
        const {updateName, updateDes} = this.state;
        const {onHide, taskId} = this.props;
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Task
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Name"
                            aria-label="Name"
                            value={updateName}
                            onChange = {(e)=> this.observingUpdateName(e)}
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            as="textarea" 
                            aria-label="Description"
                            value={updateDes}
                            onChange = {(e)=> this.observingUpdateDes(e)} 
                        />
                    </InputGroup>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="warning"
                        disabled={updateName == "" || updateDes == ""}
                        onClick = {() => this.updateTask(taskId)}
                    >
                        Update
                    </Button>
                    <Button variant="outline-warning" onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UpdateTaskModal;