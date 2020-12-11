import React from 'react'
import svg from '../error.svg'
import { Link } from 'react-router-dom'
const Error = () => {
      const message = "Page Not Found"
      return (
            <main className = "errorPage">
                  <img src = {svg} alt = "error-svg" className = "error-svg"/>
                  <h1>{message}</h1>
                  <Link to = "/">Back to Home Page</Link>
            </main>
      )
}

export default Error