import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListFriendsComponent from './components/ListFriendsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateFriendComponent from './components/CreateFriendComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListFriendsComponent}></Route>
            <Route path="/friends" component={ListFriendsComponent}></Route>
            <Route path="/add-friend" component={CreateFriendComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
