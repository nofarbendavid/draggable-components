import React, { Component }         from 'react';
import PropTypes                    from 'prop-types';
import autoBind                     from 'react-autobind';
import Button                       from './Button';
import Header                       from './Header';
import {userImages}                 from '../config/user';
import DraggableWrapper             from './DraggableWrapper';


class UserScreen extends Component{

    constructor(){
        super();
        autoBind(this);
    }


    componentWillMount(){
        this.props.actions.getUserPositionsFromLocalStorage();
    }

    _handleLogout(){
        this.props.actions.logout();
    }



    render() {
        return (
            <div className="user-screen-container">
                <Header text="Welcome back!"/>

                <div className="user-section">
                   <DraggableWrapper
                   componentName="name"
                   positions={this.props.data.positions["name"]}
                   actions={this.props.actions}
                   >
                        <div className="name">
                            <sapn>{this.props.data.currentUser.firstName}</sapn>
                            &nbsp;
                            <span>{this.props.data.currentUser.lastName}</span>
                        </div>
                    </DraggableWrapper>


                    <DraggableWrapper
                        componentName="image"
                        positions={this.props.data.positions["image"]}
                        actions={this.props.actions}
                    >
                        <div className="clearfix">
                        <div className="image">
                            <img src={userImages[this.props.data.currentUser.firstName]} alt=""/>
                        </div>
                        </div>
                    </DraggableWrapper>
                </div>

                <div className="section button-section">
                    <Button handleClick={this._handleLogout} title="Logout"/>
                </div>


            </div>
        )
    }
}

UserScreen.PropTypes= {
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}


export default UserScreen;