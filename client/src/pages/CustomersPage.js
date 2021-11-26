import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import service from '../api/service';
import { Link } from 'react-router-dom';

export default function CustomersPage(props) {

    const [customer, setCustomer] = useState(null);
    const customerId = props.match.params.id;

    const getCustomerDetails = () => {
        axios.get(`/api/customers/${customerId}`)
            .then(res => {
                console.log(res.data);
                setCustomer(res.data);
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getCustomerDetails();
    })

    const deleteCustomer = (id) => {
        return service
        .deleteCustomer(id)
        .then(res => {
            console.log('customer deleted', res);
            props.history.push('/');
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>
                Welcome
            </h3>
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
                    <tr>
                        {customer && (
                            <>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.gender}</td>
                                <td>{customer.street}</td>
                                <td>{customer.postalCode}</td>
                                <td>{customer.city}</td>
                                <td>
                                    <button onClick={() => deleteCustomer(customer._id)}>Delete</button>
                                    <Link to={`/customers/edit/${customer._id}`}><button>Edit</button></Link>
                                </td>
                            </>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
