import React from "react";
import { useState } from "react";
import service from "../api/service";

export default function AddCustomer(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    service
      .addNewCustomer({ firstName, lastName, gender, street, postalCode, city })
      .then((res) => {
        console.log("added new customer: ", res);
        props.history.push("/");
      })
      .catch((err) => console.log("Error adding customer: ", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add New Customer</button>
      </form>
    </div>
  );
}
