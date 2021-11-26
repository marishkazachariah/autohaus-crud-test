import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddCustomer from './components/AddCustomer';
import EditCustomerPage from './pages/EditCustomerPage';
import { Link } from 'react-router-dom';

function App() {
  // const [hideForm, setHideForm] = useState(true)
  // const handleHideBtn = () => setHideForm(true)
  // const handleAddBtn = () => setHideForm(false);

  return (
    <div className="App">
      <nav>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/add"}><li>Add Customer</li></Link>
      </ul>
      </nav>
      <header>
      <h1>Autohaus Customer Database</h1>
      </header>
       {/* TODO: Add history to component for redirect */}
      {/* I could not figure out how to pass props to this component 
      when implementing a show/hide feature form */}
      {/* { hideForm ? (<button className="btn" type="primary" ghost onClick={handleAddBtn}>Add New Customer</button>)
        :(<>
      <AddCustomer />
      <button className="btn" type="primary" ghost onClick={handleHideBtn}>Hide Form</button> </>)} */}
      <Switch>
        <Route exact path="/" render={props => <HomePage {...props} component={HomePage} />} />
        <Route exact path="/add" render={props => <AddCustomer {...props} component={AddCustomer} />} />
        <Route exact path="/customerdata/edit/:id" render={props => <EditCustomerPage {...props} component={EditCustomerPage} />} />
      </Switch>
      <footer>
        <p>Designed and built by Marishka Zachariah</p>
      </footer>
    </div>
  );
}

export default App;
