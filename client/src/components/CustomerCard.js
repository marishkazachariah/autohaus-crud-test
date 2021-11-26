import React from 'react'
import { Link } from 'react-router-dom';

export default function CustomerCard({ firstName, lastName, gender, street, postalCode, city, _id }) {

    return (
        <>
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{gender}</td>
                <td>{street}</td>
                <td>{postalCode}</td>
                <td>{city}</td>
                <td>
                    <Link to={`/customerdata/edit/${_id}`}><button>Edit</button></Link>
                </td>
            </tr>
        </>
    )
}
