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
import Team from './Components/Team/Team';
import AboutUs from './Components/About-Us/AboutUs';
import Footer from './Components/Helper-Components/Footer';

require('dotenv').config();

function App() {
    return (
        <div className="App">

            <Navigation />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/team' element={<Team />} />
                <Route path='/sponsers' element={<Sponserships />} />
                <Route path='/recruitment' element={<Recruitment />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
