import React, {Component}     from 'react';
import LoginScreen              from './components/LoginScreen';
import UserScreen               from './components/UserScreen';
import {connect}              from 'react-redux';
import * as UserActions         from './actions/userActions';
import {bindActionCreators}   from 'redux'


import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                {
                    this.props.userData.currentUser === null ?
                    <LoginScreen
                        actions={this.props.userActions}
                    />
                    : <UserScreen
                        data={this.props.userData}
                        actions={this.props.userActions}
                    />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const userData = state.userReducer;
    return {
        userData
    }
}


const mapDispatchToProps = (dispatch) => ({
    userActions: bindActionCreators(UserActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
