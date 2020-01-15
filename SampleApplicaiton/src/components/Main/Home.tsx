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
    displayTasksRef: React.RefObject<DisplayTasks>;
    constructor(props){
        super(props);
        this.state = { showAddModal: false };
        this.displayTasksRef = React.createRef();
    }
    
    /** Reload function */
    refresh = () => this.displayTasksRef.current.getTasks();
    
    /** Start: Add modal functions */
    openAddModal = () => { this.setState({showAddModal: true})};
    closeAddModal = () => this.setState({showAddModal: false});
    /** End: Add modal functions */
    
    render(){
        return(
            <Container className="p-5">
                {/** Title */}
                <Row className="justify-content-md-center pb-3">
                    <Col md="auto">
                        <h1>Tasks Manager</h1>
                    </Col>
                </Row>

                {/** Content */}
                <Row className="justify-content-md-center pb-4">
                    <Col md="auto">
                        <Button 
                            variant="primary"
                            onClick={this.openAddModal}
                        >
                            Add a New Task
                        </Button>
                    </Col>
                </Row>

                {/** List of Tasks */}
                <DisplayTasks ref={this.displayTasksRef} />

                {/** Add Modal */}
                <AddTaskModal
                    show={this.state.showAddModal}
                    onHide={this.closeAddModal}
                    refresh={this.refresh}
                />
            </Container>
        
        );
    }
}

export default Home;