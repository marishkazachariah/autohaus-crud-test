import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import AddCustomer from './components/AddCustomer';
import EditCustomerPage from './pages/EditCustomerPage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={CustomersPage} />
      <Route exact path="/add" component={AddCustomer} />
      <Route exact path="/edit" component={EditCustomerPage} />
    </Switch>
      <footer>
        <p>Designed and built by Marishka Zachariah</p>
      </footer>
    </div>
  );
}

export default App;
