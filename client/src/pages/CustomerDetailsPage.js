import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function CustomerDetailsPage(props) {
    const [customer, setCustomer] = useState(null);
    const customerId = props.match.params.id;
    
    const getCustomerDetails = () => {
        axios.get(`/api/customerdata/${customerId}`)
            .then(res => {
                // console.log(res.data);
                setCustomer(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCustomerDetails();
    }, [])

    return (
        <div>
            {customer && (
                <>
                    <p>{customer.firstName}</p>
                </>
            )}
        </div>
    )
}
