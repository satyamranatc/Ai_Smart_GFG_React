import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Course Management System
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/Subjects" 
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              Subjects
            </Link>
          </li>
          <li>
            <Link 
              to="/About" 
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}