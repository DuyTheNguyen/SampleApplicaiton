import * as React from 'react';
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';

const POST_API = location.protocol + '//' + location.host + '/api/task/';

export interface Props{
    onHide: () => void;
    refresh: () => void;
    show: boolean;
}

interface State{
    newName: string;
    newDes: string;
}

/**
 * AddTaskModal Component
 * + This components is a modal for adding task.
 */
class AddTaskModal extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            newName: "",
            newDes: "",
        };
    }

    /** Start: Observing text chaning functions */
    observingNewName = (e) => {this.setState({newName: e.target.value})}
    observingNewDes = (e) => {this.setState({newDes: e.target.value})}
    /** End: Observing text chaning functions */

    /** Start: Add task function */
    addTask = () => {
        let task = {
            "name": this.state.newName,
            "description": this.state.newDes
        }
        
        //Call API
        fetch(POST_API, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                this.props.onHide();
                this.props.refresh();
            })
            .catch(error => console.log(error));

    }
    /** End: Add task function */

    render(){
        const {onHide} = this.props;
        const {newName, newDes} = this.state;
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Task
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
                            value={newName}
                            onChange = {(e)=> this.observingNewName(e)}
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
                            value={newDes}
                            onChange = {(e)=> this.observingNewDes(e)} 
                        />
                    </InputGroup>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="primary"
                        disabled={newName == "" || newDes == ""}
                        onClick = {this.addTask}
                    >
                        Add
                    </Button>
                    <Button variant="outline-primary" onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddTaskModal;