import logo from './logo.svg';
import './App.css';
import ListFriendsComponent from './components/ListFriendsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
          <ListFriendsComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
