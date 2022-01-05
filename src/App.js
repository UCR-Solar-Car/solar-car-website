import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Recruitment from './Components/Recruitment/Recruitment';
import ContactUs from './Components/Contact-Us/ContactUs';
import Sponserships from './Components/Sponserships/Sponserships';
import Navigation from './Components/Navigation/Navigation';

import {
    Route,
    Routes
} from "react-router-dom";


function App() {
    return (
        <div className="App">

            <Navigation />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about-us' element={<Recruitment />} />
                <Route path='/team' element={<Recruitment />} />
                <Route path='/sponsers' element={<Sponserships />} />
                <Route path='/recruitment' element={<Recruitment />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes>

        </div>
    );
}

export default App;
