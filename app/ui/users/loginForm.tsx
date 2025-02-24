'use client'

import { useState, useEffect } from 'react';

export function loginForm() {

    const [ loginForm, setLoginForm ] = useState({
        username: '',
        email: '',
        hashed_password: '',
    })
    
    useEffect(() => {
        fetch(`http://localhost:3001/get_user/${loginForm.username}`)
        .then(res => res.text())
        .catch(err => console.error(err))
    })

    return(
        <form>
            <label>
                Username: 
                <input
                id="username"
                
                />
            </label>
            <br />
            <label>
                Email: 
                <input />
            </label>
            <br />
            <label>
                Password: 
                <input />
            </label>
        </form>
    )
}