import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
    const myContext = useContext(UserContext);
    return(
        <div>
            <h1 id='name'>Name:- {myContext.name}</h1>
            <h1 id='age'>Age:- {myContext.age}</h1>
        </div>
    )
}

export {UserProfile}
