import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import service from "../api/service";
import { Link } from "react-router-dom";

export default function EditCustomerPage(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const customerId = props.match.params.id;

  const deleteCustomer = (id) => {
    return service
      .deleteCustomer(id)
      .then((res) => {
        // console.log('customer deleted', res);
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`/api/customerdata/${customerId}`)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setGender(res.data.gender);
        setStreet(res.data.street);
        setPostalCode(res.data.postalCode);
        setCity(res.data.city);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = { firstName, lastName, gender, street, postalCode, city };
    axios
      .put(`/api/customerdata/${customerId}`, reqBody)
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Customer</h3>
      <form onSubmit={handleSubmit} className="customer-form">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="submit">
          Update This Customer
        </button>
      </form>
      <div className="edit-form">
        <button onClick={() => deleteCustomer(customerId)}>
          Delete This Customer
        </button>
        <Link to={"/"}>
          <button>Back to Customer Database</button>
        </Link>
      </div>
    </div>
  );
}
