import React from 'react';
import {useState} from 'react';
// import { useState } from 'react';

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        password: ''
    });
    let handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted:', formData);
        setFormData({
            fullName: '',
            userName: '',
            password: ''
        });
    }

   
    return (
       <form onSubmit={handleSubmit}>
        <label htmlFor='fullName'>
        Full Name:</label>
        <input
            type="text"
            placeholder='Enter your full name'
            id='fullName'
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
        <br></br>
        <label htmlFor='userName'>
        user Name:</label>
        <input
            type="text"
            placeholder='Enter your user name'
            id='userName'
            value={formData.userName}
            onChange={(e) => setFormData({...formData, userName: e.target.value})}
            />
        <br></br>
        <label htmlFor='password'>
        Password:</label>
        <input
            type="text"
            placeholder='Enter your password'
            id='password'
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
        <br></br>
       <button type='submit'>Submit</button>
       </form>
    );
}