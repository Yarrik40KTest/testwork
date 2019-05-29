import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {add} from "../Action/action";
import {Button, Form} from "react-bootstrap";

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            text: "",
        };
    }

    handleInputChange = ({target: {name, value}}) => this.setState({[name]: value})

    render() {
        return (
            <div>
                <div>
                    <Form id="create-course-form" onSubmit={this.handleSubmit}>
                        <Form.Group ref="formBasicName">
                            <Form.Label>username</Form.Label>
                            <Form.Control value={this.state.username} onChange={this.handleInputChange} type="text"
                                          name="username" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group ref="formBasicEmail">
                            <Form.Label>email</Form.Label>
                            <Form.Control value={this.state.email} onChange={this.handleInputChange} type="text"
                                          name="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group ref="formBasicText">
                            <Form.Label>text</Form.Label>
                            <Form.Control value={this.state.text} onChange={this.handleInputChange} type="text"
                                          name="text" placeholder="Enter Text"/>
                        </Form.Group>

                        <Button type="submit" value="Submit" onClick>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }

    handleSubmit = (e) => {
        const {tests} = this.props
        const {username, email, text} = this.state
        debugger
        e.preventDefault();
        this.props.add({username, email, text, id: parseInt(tests[tests.length - 1].id) + 1, status: 0});
        this.state.username='';
        this.state.email='';
        this.state.text='';
    }
}

function mapStateToProps(state) {

    return {
        tests: state.TestReducer.test,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({add: add}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(NewTask))