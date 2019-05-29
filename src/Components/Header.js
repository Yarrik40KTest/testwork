import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import {action} from "../Action/action";
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import {Button} from "react-bootstrap";

class Header extends Component{
    render() {
        return (
            <div>
                <form >
                    <Button value='menu' onClick={this.handleSubmit} variant="primary" type="submit">
                        menu
                    </Button>
                    <Button value='login' onClick={this.handleSubmitLogin}  variant="primary" type="submit">
                        login
                    </Button>
                </form>
            </div>
        )

    }
    handleSubmit = (e) => {
          e.preventDefault();
        this.props.history.push('/home')
     };

handleSubmitLogin = (e) => {
    e.preventDefault();
    this.props.history.push('/login')
}
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({action: action}, dispatch);
}
export default connect(null,matchDispatchToProps)(withRouter(Header))