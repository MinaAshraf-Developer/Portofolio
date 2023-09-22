import { useEffect, useState } from "react";

import "./effect.css"


const Effect = () => {
    const [users, setUsers] = useState([])
    const [filterUsers, setFilterUsers] = useState([])
    const [value, setValue] = useState()
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
        return () => {
           return false
        }
    }, [])

    useEffect(() => {
        setFilterUsers(users)
    }, [users])

    useEffect(() => {
        const filter = users.filter(
            user => user.name.toLowerCase().includes(value)
        )
        setFilterUsers(filter)
    }, [value])


    const handleChange = (e) => {
            setValue(e.target.value)
        /* const filter = users.filter(
            user => user.name.toLowerCase().includes(e.target.value)
        )
        setFilterUsers(filter) */
        }
  return (
      <>
          <input type="text" className="search" onInput={ handleChange }></input>
          <h1>{ filterUsers.map(
              user => <h3 key={user.id}>{user.name}</h3>
          ) }</h1>
        
      </>
  )
}

export default Effect
