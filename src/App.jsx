import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import Subjects from './Pages/Subjects/Subjects'
import Topics from './Pages/Subjects/Topics'
import Chapters from './Pages/Subjects/Chapters'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <BrowserRouter>
        <NavBar/>
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Subjects" element={<Subjects/>} />
            <Route path="Subjects/:id/Topics/" element={<Topics/>} />
            <Route path="Subjects/:id/Topics/:Tid/Chapters" element={<Chapters/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}