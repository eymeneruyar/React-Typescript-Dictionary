import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Resources from './pages/Resources';
import SearchResult from './pages/SearchResult';
import Edit from './pages/Edit';

// Router
const router = 
<Router>
  <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/result' element={ <SearchResult /> } />
    <Route path='/resources' element={ <Resources /> } />
    <Route path='/edit' element={ <Edit /> } />
  </Routes>
</Router> 

ReactDOM.render( router,document.getElementById('root') );