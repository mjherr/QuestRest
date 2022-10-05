import { useEffect, useState } from "react";

function UserStats(data) {
    const [users, setUsers] = useState([])

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://localhost:5001/users`)
        const resData = await response.json()
        setUsers(resData)
    }
    fetchData()
}, [])

let usersFormatted = users.map((user) => {
    return (
        <div className="col-sm-6" key={user.userId}>
            <h2>
                <a href="#" onClick={() => (`/users/${user.userId}`)}>
                    {user.name}
                </a>
            </h2>
            <p>Hello</p>
        </div>
    )
})
           
return (
    <main>
        <h1>Hello2</h1>
        <div className="row">
            {usersFormatted}
        </div>
    </main>
)
}

export default UserStats;