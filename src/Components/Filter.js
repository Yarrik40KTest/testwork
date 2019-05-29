import React, {Component} from 'react';
import { Form,Col} from 'react-bootstrap';
import Main from "./Main";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDocumentsCount: '',
            selectedTasksCount: '',
            selectedDate: null,
            activeSortedValue:'id' ,
            data: [],
            durationList: [],
            documentsList: ["username","email","status"],
            tasksList: [],
        }
    }

    handleInputChange = (e) => {

        this.setState({activeSortedValue: e.target.value})
    }

    render() {
        return (
             <div>
                <Col md={6}>
                    <Form.Group controlId="documents">
                        <Form.Label>Select</Form.Label>
                        <Form.Control
                            as="select"
                            name="selectedDocumentsCount"
                            value={this.state.activeSortedValue}
                            onChange={(e) => this.handleInputChange(e)}
                        >

                            <option value='showValue' selected hidden > ShowValue </option>
                            {this.state.documentsList.map((document) => <option value={document} key={document}>{ document }</option>)}
                        </Form.Control>
                    </Form.Group>
                </Col>
            <Col>
                <Main activeSortedValue={this.state.activeSortedValue}/>
            </Col>
            </div>
        )
    }

}
export default Filter