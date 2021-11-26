import './App.css';
import { Switch, Route } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import AddCustomer from './components/AddCustomer';
import EditCustomerPage from './pages/EditCustomerPage';
import { Link } from 'react-router-dom';
// import { useState } from "react";

function App() {
  // const [hideForm, setHideForm] = useState(true)
  // const handleHideBtn = () => setHideForm(true)
  // const handleAddBtn = () => setHideForm(false);

  return (
    <div className="App">
      <header>
      <h1>Autohaus Customer Database</h1>
      {/* TODO: Add history to component for redirect */}
      {/* I could not figure out how to pass props to this component 
      when implementing a show/hide feature form */}
      {/* { hideForm ? (<button className="btn" type="primary" ghost onClick={handleAddBtn}>Add New Customer</button>)
        :(<>
      <AddCustomer />
      <button className="btn" type="primary" ghost onClick={handleHideBtn}>Hide Form</button> </>)} */}
      <Link to={"/add"}><button>Add Customer</button></Link>
      </header>
      <Switch>
        {/* <Route exact path="/" component={CustomersPage} /> */}
        <Route exact path="/" render={props => <CustomersPage {...props} component={CustomersPage} />} />
        <Route exact path="/add" render={props => <AddCustomer {...props} component={AddCustomer} />} />
        <Route exact path="/customerdata/edit/:id" render={props => <EditCustomerPage {...props} component={EditCustomerPage} />} />
        {/* <Route exact path="/edit/:id" component={EditCustomerPage} /> */}
      </Switch>
      <footer>
        <p>Designed and built by Marishka Zachariah</p>
      </footer>
    </div>
  );
}

export default App;
