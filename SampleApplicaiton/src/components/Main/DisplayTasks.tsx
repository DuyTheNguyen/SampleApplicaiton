import * as React from 'react';
import {Row, Col, Spinner} from 'react-bootstrap';
import Task from './Task';

const GET_API = location.protocol + '//' + location.host + '/api/task/';

interface State{
    tasks: Array<any>;
    isLoading: boolean;
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
            isLoading: true
        };
    }

    render(){
        return (
            <Row className="justify-content-md-center">
                <Col md="auto">
                    {
                        (this.state.isLoading) ? <Spinner animation="border" /> :
                        /** Iterate tasks array */
                        (this.state.tasks != null && this.state.tasks.length != 0 ) ? this.state.tasks.map((task: any) => 
                            <Task
                                key={task.id}
                                task={task}
                                refresh={this.getTasks}
                            />
                        ) : <div>No Task</div>
                    }
                </Col>
            </Row>
        );
    }

    /** Call API once components are rendered to display all the tasks*/
    componentDidMount(){
        this.getTasks();
    }

    getTasks = () => {
        fetch(GET_API, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(tasks => this.setState({ tasks, isLoading: false }))
            .catch(error => console.log(error));
    }
    
}

export default DisplayTask;