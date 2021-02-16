import React, { Component } from 'react';
import FriendService from '../services/FriendService';

class ViewFriendComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            friend: {}
        }
    }

    componentDidMount() {
        FriendService.getFriendById(this.state.id).then((res) => {
            this.setState({friend: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Friend Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Friend First Name: </label>
                            <div>{this.state.friend.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Friend Last Name: </label>
                            <div>{this.state.friend.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Friend Birth Date: </label>
                            <div>{this.state.friend.birthDate}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewFriendComponent;