import React, { Component } from 'react';

class CreateFriendComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            birthDate: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
        this.saveFriend = this.saveFriend.bind(this);
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

    saveFriend = (e) => {
        e.preventDefault();
        let friend = {firstName: this.state.firstName, lastName: this.state.lastName, birthDate: this.state.birthDate};
        console.log('friend =>' + JSON.stringify(friend));
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
                            <h3 className="text-center">Add Friend</h3>
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
                                    <button className="btn btn-success" onClick={this.saveFriend}>Save</button>
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

export default CreateFriendComponent;