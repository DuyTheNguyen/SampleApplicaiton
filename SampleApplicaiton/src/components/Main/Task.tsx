import * as React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import UpdateTaskModal from './UpdateTaskModal'

export interface Props{
    task: any;
}

interface State{
    showUpdateModal: boolean;
    id: number;
}

class Task extends React.Component<Props, State>{
    constructor(props){
        super(props);
        this.state = {
            showUpdateModal: false,
            id: null,
        };
    }

    reloadPage = () =>{
        window.location.reload();
    }

    openUpdateModal = (id) => { this.setState({showUpdateModal: true, id: id})};
    closeUpdateModal = () => { this.setState({showUpdateModal: false})};

    render(){
        const { task } = this.props;
        return(
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={task.id}>
                                {task.name}
                            </Accordion.Toggle>
                            <Button 
                                className="ml-5" 
                                variant="warning"
                                onClick={()=>this.openUpdateModal(task.id)}
                            >
                                Update
                            </Button>
                            <Button className="ml-2" variant="danger">Delete</Button>
                        </Card.Header>
                        <Accordion.Collapse eventKey={task.id}>
                            <Card.Body>{task.description}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <UpdateTaskModal
                    show={this.state.showUpdateModal}
                    onHide={this.closeUpdateModal}
                    reload={this.reloadPage}
                    taskId = {this.state.id}
                    name = "Update Task"
                />
            </div>
        );
    }
}

export default Task;