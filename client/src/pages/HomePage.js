import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import CustomerCard from '../components/CustomerCard';

export default function HomePage(props) {

    const [customers, setCustomer] = useState([]);

    const getAllCustomers = () => {
        axios.get(`/api/customerdata`)
            .then(res => {
                // console.log(res.data);
                setCustomer(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllCustomers();
    }, [])

    return (
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
                    {customers.map(customer => <CustomerCard key={customer._id} {...customer} {...props} />)}
                </tbody>
            </table>
        </div>
    )
}
