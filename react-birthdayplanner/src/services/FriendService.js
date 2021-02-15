import axios from 'axios';

const FRIEND_API_BASE_URL = "http://localhost:8080/api/v1/friends";

class FriendService {
    getFriends() {
        return axios.get(FRIEND_API_BASE_URL);
    }
}

export default new FriendService()