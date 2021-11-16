import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Quizz from './components/Site/Quizz/Quizz';
import LandingPage from './components/Site/LandingPage/LandingPage';

function App() {

  return (
    <div className="container">
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/quizz' component={Quizz} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
