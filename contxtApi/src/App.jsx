import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/navbar'
import {Logs} from './components/loginLogOut'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Logs />
    </div>
  );
}

export default App;
