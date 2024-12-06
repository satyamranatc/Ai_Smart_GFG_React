import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Subjects() {
    const navigate = useNavigate()

    const [subjects, setSubjects] = useState([
        {id: 1, name: "Math", color: "bg-blue-100", icon: "📊"},
        {id: 2, name: "Science", color: "bg-green-100", icon: "🔬"},
        {id: 3, name: "History", color: "bg-red-100", icon: "🏛️"},
        {id: 4, name: "Geography", color: "bg-yellow-100", icon: "🌍"}
    ])

    const handleAddSubject = () => {
        const newSubject = {
            id: subjects.length + 1,
            name: "New Subject",
            color: "bg-purple-100",
            icon: "➕"
        }
        setSubjects([...subjects, newSubject])
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <section className="mb-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-gray-800">All Subjects</h2>
                    <button 
                        onClick={handleAddSubject}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Add Subject
                    </button>
                </div>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {subjects.map(subject => (
                    <div 
                        key={subject.id} 
                        className={`${subject.color} rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-4xl">{subject.icon}</span>
                            <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
                        </div>
                        <button 
                            onClick={() => navigate(`/Subjects/${subject.id}/Topics/`)}
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            See Topics
                        </button>
                    </div>
                ))}
            </section>
        </div>
    )
}