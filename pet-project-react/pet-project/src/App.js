import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import PetDetails from './components/PetDetails';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' component={Categories} />
        <Route path='/pets/details/:petId' component={PetDetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
