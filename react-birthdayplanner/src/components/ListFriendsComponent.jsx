import React, { Component } from 'react';
import FriendService from '../services/FriendService';

class ListFriendsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            friends: []
        }
        this.addFriend = this.addFriend.bind(this);
        this.editFriend = this.editFriend.bind(this);
    }

    componentDidMount() {
        FriendService.getFriends().then((res) => {
            this.setState({friends: res.data});
        });
    }

    addFriend() {
        this.props.history.push('/add-friend/-1');
    }

    editFriend(id) {
        this.props.history.push(`/add-friend/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Friends List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addFriend}>Add Friend</button>
                </div>
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
                                        <td>
                                            <button onClick={() => this.editFriend(friend.id)} className="btn btn-info">Update</button>
                                        </td>
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