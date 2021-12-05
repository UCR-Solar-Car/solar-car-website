import './CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu';
import Home from  './Components/Home';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
    </div>
  );
}

export default App;
