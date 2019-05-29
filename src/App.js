import React, {Component} from 'react';
import './App.css';
import {bindActionCreators} from "redux/es/redux";
import {requestTest,select} from "./Action/action"
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Filter from "./Components/Filter";

class App extends Component {

    constructor(props){
        super(props)
        this.setState={
            tests:PropTypes.array,
        }
    }
    componentDidMount() {
        this.props.requestTest();
    }

    render() {
        return (
            <div className="App">
                <Filter/>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select,requestTest: requestTest},dispatch);
}

export default connect(null, matchDispatchToProps)(App)
