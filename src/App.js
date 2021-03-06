import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Recruitment from './Components/Recruitment/Recruitment';
import Sponserships from './Components/Sponserships/Sponserships';
import Navigation from './Components/Navigation/Navigation';

import {
    Route,
    Routes
} from "react-router-dom";
import Team from './Components/Team/Team';
import AboutUs from './Components/About-Us/AboutUs';
import Footer from './Components/Helper-Components/Footer';
import Links from './Components/Links/Links';
import Donate from './Components/Donate/Donate';
import Admin from './Components/Admin/Admin';

require('dotenv').config();

function App() {
    return (
        <div className="App">

            <Navigation />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about-us' exact element={<AboutUs />} />
                <Route path='/team' exact element={<Team />} />
                <Route path='/sponsers' exact element={<Sponserships />} />
                <Route path='/recruitment' exact element={<Recruitment />} />
                <Route path='/links' exact element={<Links />} />
                <Route path='/donate' exact element={<Donate />} />
                <Route path='/admin' exact element={<Admin />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
