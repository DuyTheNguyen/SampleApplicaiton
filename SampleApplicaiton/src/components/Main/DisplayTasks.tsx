import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import Task from './Task';

const GET_API = location.protocol + '//' + location.host + '/api/task/';

interface State{
    tasks: Array<any>;
}

/**
 * DisplayTask Component
 * + This components contains all the tasks
 */
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
                        /** Iterate tasks array */
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

    /** Call API once components are rendered to display all the tasks*/
    componentDidMount(){
        fetch(GET_API,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(tasks => this.setState({tasks}))
            .catch(error => console.log(error))
    }
    
}

export default DisplayTask;