import * as React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

export interface Props{
    task: any;
}

class Task extends React.Component<Props,{}>{
    render(){
        const { task } = this.props;
        return(
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={task.id}>
                            {task.name}
                        </Accordion.Toggle>
                        <Button className="ml-5" variant="warning">Update</Button>
                        <Button className="ml-2" variant="danger">Delete</Button>
                    </Card.Header>
                    <Accordion.Collapse eventKey={task.id}>
                    <Card.Body>{task.description}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default Task;