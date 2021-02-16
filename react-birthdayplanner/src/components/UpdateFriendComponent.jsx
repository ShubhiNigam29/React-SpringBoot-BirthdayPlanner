import React, { Component } from 'react';
import FriendService from '../services/FriendService';

class UpdateFriendComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            birthDate: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
        this.updateFriend = this.updateFriend.bind(this);
    }

    componentDidMount() {
        FriendService.getFriendById(this.state.id).then((res) => {
            let friend = res.data;
            this.setState({firstName: friend.firstName, lastName: friend.lastName, birthDate: friend.birthDate});
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeBirthDateHandler = (event) => {
        this.setState({birthDate: event.target.value});
    }

    updateFriend = (e) => {
        e.preventDefault();
        let friend = {firstName: this.state.firstName, lastName: this.state.lastName, birthDate: this.state.birthDate};
        FriendService.createFriend(friend).then(res => {
            this.props.history.push('/friends');
        });
    }

    cancel() {
        this.props.history.push('/friends');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Friend</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Birth Date: </label>
                                        <input placeholder="Birth Date" name="birthDate" className="form-control" 
                                        value={this.state.birthDate} onChange={this.changeBirthDateHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateFriend}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateFriendComponent;