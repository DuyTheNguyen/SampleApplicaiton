import * as React from  'react';

import DisplayTasks from "./DisplayTasks";
import AddTaskModal from './AddTaskModal';
import {Container, Row, Col, Button} from 'react-bootstrap';

{/**State */}
interface State{
    showAddModal: boolean;
}
/**
 * Home Components
 * + This componentes is the main page
 */
class Home extends React.Component<{}, State>{
    constructor(props){
        super(props);
        this.state = {showAddModal: false};
    }
    
    /** Reload function */
    reloadPage = () =>{
        window.location.reload()
    }

    /** Start: Add modal functions */
    openAddModal = () => { this.setState({showAddModal: true})};
    closeAddModal = () => { this.setState({showAddModal: false})};
    /** End: Add modal functions */
    
    render(){
        return(
            <Container className="p-5">
                {/** Title */}
                <Row className="pb-3">
                    <Col>
                        <h1>Tasks Manager</h1>
                    </Col>
                </Row>

                {/** Content */}
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

                {/** List of Tasks */}
                <DisplayTasks/>

                {/** Add Modal */}
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