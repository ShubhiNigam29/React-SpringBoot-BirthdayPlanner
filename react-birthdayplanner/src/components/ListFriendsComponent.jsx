import React, { Component } from 'react';
import FriendService from '../services/FriendService';

class ListFriendsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        FriendService.getFriends().then((res) => {
            this.setState({friends: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Friends List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Birth Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.friends.map(
                                    friend =>
                                    <tr key = {friend.id}>
                                        <td> {friend.firstName} </td>
                                        <td> {friend.lastName} </td>
                                        <td> {friend.birthDate} </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListFriendsComponent;