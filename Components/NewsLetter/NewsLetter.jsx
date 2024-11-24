import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers on your email</h1>
        <p>Suscribe to our page to stay updated</p>
        <div>
            <input type= "email" placeholder= "Your email id"></input>
            <button>Suscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter