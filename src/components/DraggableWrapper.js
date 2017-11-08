import React, { Component }         from 'react';
import PropTypes                    from 'prop-types';
import Draggable                    from 'react-draggable';
import autoBind                     from 'react-autobind';



class DraggableWrapper extends Component{

    constructor(){
        super();
        autoBind(this);
    }


    _handleStop(e, ui) {
        this.props.actions.setUserPositionsToLocalStorage(this.props.componentName, ui.x, ui.y);
    }


    render(){
        return(
            <Draggable
                position={{x: this.props.positions['x'], y: this.props.positions['y']}}
                onStop={this._handleStop}>
                {this.props.children}
            </Draggable>
        )
    }
}

DraggableWrapper.PropTypes= {
    componentName:PropTypes.string.isRequired,
    positions: PropTypes.object.isRequired
}

export default DraggableWrapper;