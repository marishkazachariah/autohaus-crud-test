import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomerCard from "../components/CustomerCard";

export default function HomePage(props) {
  const [customers, setCustomer] = useState([]);
  const [searchLastName, setSearchLastName] = useState("");

  const getAllCustomers = () => {
    axios
      .get(`/api/customerdata`)
      .then((res) => {
        // console.log(res.data);
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleLastNameSearch = (e) => {
    e.preventDefault();
    setSearchLastName(e.target.value);
  };

  const filteredLastNames = customers.filter(customer => {
    return ( !searchLastName ? true: `${customer.lastName}`.toLowerCase().includes(searchLastName) )
  })

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <>
    <form>
        <label htmlFor="lastName">Search by Name of NabeTone</label>
        <input type="search" name="lastName" id="lastName" placeholder="Search by Last Name" value={searchLastName} onChange={handleLastNameSearch} />
    </form>
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Street</th>
            <th>Postal Code</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {filteredLastNames.length !== 0 ? (
            filteredLastNames.map((customer) => (
                <CustomerCard key={customer._id} {...customer} {...props} />
            ))
        ) : <h3>There are no customers...</h3>}
          {/* {customers.map((customer) => (
            <CustomerCard key={customer._id} {...customer} {...props} />
          ))} */}
        </tbody>
      </table>
    </div>
    </>
  );
}
