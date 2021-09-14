//import logo from './logo.svg';
import './index.css';
import { Home } from './Components/Home';
import Signup from './Components/Signup';
import {Route} from 'react-router-dom'
import Signin from './Components/Signin';
import BoardsManagement from './Components/BoardsManagement';
import { Heading } from './Components/Heading';

function App() {
  return (
    <>
    <Heading />
    <Route  path='/Signup'>
      <Signup />
    </Route>
        
    <Route exact path='/'>
    <Home/>
    </Route>
    <Route exact path='/Signin'>
      <Signin />
    </Route>
    <Route exact path='/BoardsManagement'>
      <BoardsManagement />
    </Route>

    
    
  
    </>

  );
}

export default App;
