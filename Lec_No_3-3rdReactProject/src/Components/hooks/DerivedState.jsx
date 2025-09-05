import React, { useState } from 'react';

export const DerivedState = () =>
{
    const [userInfo] = useState([
    { Name: "Atharva", Age: 23, City: "Pune" },
    { Name: "John", Age: 30, City: "New York" },
    { Name: "Alice", Age: 28, City: "London" },
    { Name: "Bob", Age: 35, City: "San Francisco" },
    { Name: "Charlie", Age: 22, City: "Los Angeles" },
    { Name: "David", Age: 25, City: "Chicago" },
    ])

    return (
        <div>
            <h1> User Information </h1>
            <ul>
                {userInfo.map((user, index) => (
                    <li key={index}>
                        Name: {user.Name}, Age: {user.Age}, City: {user.City};
                    </li>
                ))}
            </ul>
        </div>
    )
}