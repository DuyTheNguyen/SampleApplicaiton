import * as React from 'react';
import {Row, Col, Accordion, Card, Button} from 'react-bootstrap';
import Task from './Task';

const READ_API = location.protocol + '//' + location.host + '/api/task/';

interface State{
    tasks: Array<any>;
}

class DisplayTask extends React.Component<{}, State>{
    constructor(props){
        super(props);
        this.state = {
            tasks: null,
        };
    }

    render(){
        return(
            <Row>
                <Col>
                    {
                        (this.state.tasks != null && this.state.tasks.length != 0 ) ? this.state.tasks.map((task: any) => 
                            <Task
                                key = {task.id}
                                task = {task}
                            />
                        ) : <div>No Task</div>
                    }
                    
                </Col>
            </Row>
        );
    }

    componentDidMount(){
        fetch(READ_API,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(tasks => this.setState({tasks}))
            .catch(error => console.log(error))
    }
    
}

export default DisplayTask;