import React, { Component } from 'react';

class ViewFriendComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ViewFriendComponent;