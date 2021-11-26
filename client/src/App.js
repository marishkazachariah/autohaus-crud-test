import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from "react";
import CustomersPage from './pages/CustomersPage';
import AddCustomer from './components/AddCustomer';
import EditCustomerPage from './pages/EditCustomerPage';

function App() {
  const [hideForm, setHideForm] = useState(true)
  const handleHideBtn = () => setHideForm(true)
  const handleAddBtn = () => setHideForm(false);

  return (
    <div className="App">
      <header>
      <h1>Autohaus Customer Database</h1>
      { hideForm ? (<button className="btn" type="primary" ghost onClick={handleAddBtn}>Add New Customer</button>)
        :(<>
      <AddCustomer/>
      <button className="btn" type="primary" ghost onClick={handleHideBtn}>Hide Form</button> </>)}
      </header>
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
