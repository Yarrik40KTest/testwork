import React,{Component} from 'react';
import {action,noaction} from "../Action/action";
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import {Form,Button} from 'react-bootstrap';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name"  value={this.state.name} onChange={this.handleInputChange}  />
                    </Form.Group  >

                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}  />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>;
            </div>
        )
    }
    handleInputChange = ({target: {name, value}}) => this.setState({[name]: value})
    handleSubmit = (e) => {
        e.preventDefault();
        const {name, password} = this.state;
        if (name === "admin" && password === "123") {

            this.props.action();
            this.props.history.push('/home')

        }else {
            this.props.noaction();
            this.props.history.push('/home')
        }

    }

}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({action: action,noaction: noaction}, dispatch);
}


export default connect(null, matchDispatchToProps) (withRouter(Login));