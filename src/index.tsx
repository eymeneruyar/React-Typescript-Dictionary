import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

// Router
const router = 
<Router>
  <Routes>
    <Route path='/home' element={ <Home /> } />
    <Route path='/result' element={ <SearchResult /> } />
  </Routes>
</Router> 

ReactDOM.render( router,document.getElementById('root') );