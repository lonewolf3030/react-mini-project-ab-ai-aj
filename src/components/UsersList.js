import React, {useState, useEffect} from 'react'

const UsersList = () => {

    const [users, setUsers] = useState([]);

    console.log(users)

    useEffect(() => {
        const fetchUsers = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data)
        }

        fetchUsers()
    }, [])

  return (
    <div>
        <h1>Users List :-</h1>

        <ul>
            {
                users.map((item, idx) => {
                    return(
                        <li key = {idx}>{item.name}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UsersList