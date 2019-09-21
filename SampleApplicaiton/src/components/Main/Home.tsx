import * as React from  'react';

import DisplayTasks from "./DisplayTasks";
import AddTaskModal from './AddTaskModal';
import {Container, Row, Col, Button} from 'react-bootstrap';


interface State{
    showAddModal: boolean;
}

class Home extends React.Component<{}, State>{
    constructor(props){
        super(props);
        this.state = {showAddModal: false};
    }
    
    reloadPage = () =>{
        window.location.reload()
    }

    openAddModal = () => { this.setState({showAddModal: true})};
    closeAddModal = () => { this.setState({showAddModal: false})};
    
    render(){

        return(
            <Container className="p-5">
                <Row className="pb-3">
                    <Col>
                        <h1>Tasks Manager</h1>
                    </Col>
                </Row>
                <Row className="pb-1">
                    <Col>
                        <Button 
                            variant="primary"
                            onClick={this.openAddModal}
                        >
                            Add a New Task
                        </Button>
                    </Col>
                </Row>
                <DisplayTasks/>
                <AddTaskModal
                    show={this.state.showAddModal}
                    onHide={this.closeAddModal}
                    reload={this.reloadPage}
                />
            </Container>
        
        );
    }
}

export default Home;