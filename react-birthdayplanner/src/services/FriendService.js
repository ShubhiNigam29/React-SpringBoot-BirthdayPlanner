import axios from 'axios';

const FRIEND_API_BASE_URL = "http://localhost:8080/api/v1/friends";

class FriendService {
    getFriends() {
        return axios.get(FRIEND_API_BASE_URL);
    }

    createFriend(friend) {
        return axios.post(FRIEND_API_BASE_URL, friend);
    }

    getFriendById(friendID) {
        return axios.get(FRIEND_API_BASE_URL + '/' + friendID);
    }

    updateFriend(friend, friendID) {
        return axios.put(FRIEND_API_BASE_URL + '/' + friendID, friend);
    }
}

export default new FriendService()