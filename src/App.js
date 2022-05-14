import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from './components/home';
import Gallery from './components/gallery';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter><div className="App">
      <Switch>
    
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact component={Gallery} />
          <Redirect path="*" to="/"/>
  
      </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
