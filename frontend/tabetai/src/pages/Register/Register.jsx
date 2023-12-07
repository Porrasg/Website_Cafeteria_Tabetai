import React from 'react'
import './Register.css'
import { useState } from 'react';
import User from '../../components/User';

function Register() {
    const [currUser, setCurrUser]=useState(null);
    return (
        <div>
            <div>
                <User currUser={currUser} setCurrUser={setCurrUser} />
            </div>
        </div>
    )
}

export default Register