import React from 'react';
import { useState, useEffect } from 'react';
import { doPosts } from '../serves';

const Users = () => {

    const [user, setUser] = useState([]);

    async function getUser() {
        const res = await doPosts('/users')
        setUser(res)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        
        <div>
        <table className="table">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>user name</th>
                        <th>webSite</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) => <tr key={index}>
                                <td>{item.id}</td>
                                <td> {item.name} </td>
                                <td> {item.phone} </td>
                                <td> {item.email} </td>
                                <td> {item.username} </td>
                                <td> {item.website} </td>
                                <td> {item.address.street} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};


export default Users;