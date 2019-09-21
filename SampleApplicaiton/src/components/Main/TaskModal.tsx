import * as React from 'react';

import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';
const POST_API = location.protocol + '//' + location.host + '/api/task/';

export interface Props{
    name: string;
    onHide: () => void;
    reload: () => void;
    show: boolean;
}

interface State{
    newName: string;
    newDes: string;
}

class TaskModal extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            newName: "",
            newDes: "",
        };
    }

    observingNewName = (e) => {this.setState({newName: e.target.value})}
    observingNewDes = (e) => {this.setState({newDes: e.target.value})}
    addTask = () => {
        let task = {
            "name": this.state.newName,
            "description": this.state.newDes
        }

        fetch(POST_API,{
            method:"POST",
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => console.log(error))
        
        this.props.reload();
    }

    render(){
        const {name, onHide} = this.props;
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
                    {name}
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
                        {name} 
                    </Button>
                    <Button variant="outline-primary" onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default TaskModal;