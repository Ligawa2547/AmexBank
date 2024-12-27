import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CoursePage from './pages/CoursePage';  // Import CoursePage
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/course/:courseId" component={CoursePage} />  {/* Route for individual course page */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;

