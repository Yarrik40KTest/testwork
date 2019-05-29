import React, {Component} from 'react';
import Paginations from "../Pagination/Pagination"
import { withRouter } from 'react-router-dom'
import {select} from "../Action/action";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'
import {Form} from 'react-bootstrap';


import NewTask from  "./NewTask"

class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleItems: [],
            pageOfItems: [],
            filteredProducts:[],
            showPagination: true,
           // activeSortedValue:'id',
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({pageOfItems: pageOfItems});
    }

    componentDidUpdate(prevState) {
        if (!this.state.showPagination)  {
            this.setState({ showPagination: true })
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

        // let reff = nextProps.location.search.split('=')[1] || ''
        if (this.props.activeSortedValue !== nextProps.activeSortedValue)  {
            this.setState({ showPagination: false})
        }
        //test.sort((a, b) => a[this.state.activeParam] -b)

        const filteredProducts = nextProps.tests.sort((a,b)=>{


            const nameA = a[nextProps.activeSortedValue]
            const nameB = b[nextProps.activeSortedValue]
            if (nameA < nameB) //сортируем строки по возрастанию
                return -1
            if (nameA > nameB)
                return 1
            return 0 // Никакой сортировки
        })
        this.setState({filteredProducts})
      }

    handleChange = ({target : {name, value}}) => this.setState({[name]: value});
    handleChangeCheckbox = ({target : {name, checked}}) => {

        this.setState({[name]: checked});
    }
    ShowList() {
        return this.state.pageOfItems.map((test) => {
                return (
                    <Form>
                       <div>
                           <h1>{test.username}</h1>
                           <p>{test.email}</p>
                           <Form.Group controlId="exampleForm.ControlTextarea1" >
                               <Form.Label>Example textarea</Form.Label>

                               <Form.Control as='textarea' disabled= { !this.props.isAdmin}  rows="4" name={test.username} onChange={this.handleChange} cols="" value={this.state[test.username] || test.text} />

                           </Form.Group>
                           {/*<textarea  disabled= { !this.props.isAdmin}  rows="4" name={test.username} onChange={this.handleChange} cols="" value={this.state[test.username] || test.text}></textarea>*/}
                           <Form.Group controlId="formBasicChecbox">
                               <Form.Check name={`${test.username}_checkbox`}
                                           disabled= { !this.props.isAdmin}
                                           type="checkbox"
                                           checked={this.state[`${test.username}_checkbox`]}
                                           onChange={this.handleChangeCheckbox} label="Check me out" />
                           </Form.Group >
                           {/*<label>*/}
                           {/*    <input*/}
                           {/*        name={`${test.username}_checkbox`}*/}
                           {/*        disabled= { !this.props.isAdmin}*/}
                           {/*        type="checkbox"*/}
                           {/*        checked={this.state[`${test.username}_checkbox`]}*/}
                           {/*        onChange={this.handleChangeCheckbox} />*/}
                           {/*    Checked!*/}
                           {/*</label>*/}
                       </div>
                    </Form>
                );
            }
        )
    }


    render() {
        return (
            <div>
                <NewTask/>
                {this.ShowList()}
                { this.state.showPagination && <Paginations items={this.state.filteredProducts} onChangePage={this.onChangePage}/> }
            </div>
        );
    }
}
    function mapStateToProps(state) {

        return {
           tests:state.TestReducer.test,
           isAdmin:state.TestReducer.isAdmin,
        }
    }

    function matchDispatchToProps(dispatch) {
        return bindActionCreators({select: select}, dispatch);
    }

    export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Main));


