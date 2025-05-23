import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Notfound from './Components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <div className="content">
     <Switch>
        <Route path="/Create">
          <Create/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
    
    <Route path="*" element={<Notfound/>}>
      
    </Route>
     </Switch>
     </div>
    </div>
     </Router>
  );
}

export default App;

