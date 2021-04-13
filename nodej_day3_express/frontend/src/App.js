import './App.css';
import {Link,Route, Switch} from 'react-router-dom';
import Home from './Containers/Home/Home';
import About from './Components/About/About';
import AddUser from './Containers/AddUser/AddUser';
function App() {
  return (
    <div className="App">
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/adduser'>Add user</Link></li>
      </ul>

      <Switch>
      <Route path='/about' component={About} />
      <Route path='/adduser' component={AddUser} />
      <Route path='/' component={Home} />
      </Switch>


    </div>
  );
}

export default App;
