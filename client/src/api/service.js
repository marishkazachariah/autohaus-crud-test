import axios from "axios";

const service = axios.create({
  // baseURL: "http://localhost:5005/api",
  baseURL: "/api",
  // make sure you use PORT = 5005 (the port where our server is running)
});

const errorHandler = (err) => {
  throw err;
};

const addNewCustomer = (newCustomer) => {
  return service
    .post("/customers/customer", newCustomer)
    .then((res) => res.data)
    .catch(errorHandler);
};

const deleteCustomer = (customerId) => {
    return service.delete(`/customers/${customerId}`)
    .then((res) => res.data)
    .catch(errorHandler);
}

const data = {
    service,
    addNewCustomer,
    deleteCustomer
};

export default data;