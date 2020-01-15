import * as React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import UpdateTaskModal from './UpdateTaskModal'

const DELETE_API = location.protocol + '//' + location.host + '/api/task/';

export interface Props{
    task: any;
    refresh: () => void;
}

interface State{
    showUpdateModal: boolean;
    id: number;
}
/**
 * Task Component
 * + This components is a single task.
 */
class Task extends React.Component<Props, State>{
    constructor(props){
        super(props);
        this.state = {
            showUpdateModal: false,
            id: null,
        };
    }

    /** Reload function */
    refresh = () => this.props.refresh();

    /** Start: Update modal functions */
    openUpdateModal = (id) => { this.setState({showUpdateModal: true, id: id})};
    closeUpdateModal = () => { this.setState({showUpdateModal: false})};
    /** End: Update modal functions */

    /** Start: Delete task function */
    deleteTask = (id) => {
        //Call API
        fetch(DELETE_API + id, {
            method: 'DELETE'
        })
            .then(result => this.refresh())
            .catch(error => console.log(error));
    } 
    /** End: Delete task function */

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
                            {/** Update Button */}
                            <Button 
                                className="ml-5" 
                                variant="warning"
                                onClick={()=>this.openUpdateModal(task.id)}
                            >
                                Update
                            </Button>
                            {/** Delete Button */}
                            <Button 
                                className="ml-2" variant="danger"
                                onClick={()=>this.deleteTask(task.id)}
                            >
                                Delete
                            </Button>
                        </Card.Header>
                        <Accordion.Collapse eventKey={task.id}>
                            <Card.Body>{task.description}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/** Update Task Modal */}
                <UpdateTaskModal
                    show={this.state.showUpdateModal}
                    onHide={this.closeUpdateModal}
                    refresh={this.refresh}
                    taskId = {this.state.id}
                />
            </div>
        );
    }
}

export default Task;