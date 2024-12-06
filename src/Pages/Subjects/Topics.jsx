import React, { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Topics() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [topics, setTopics] = useState([
        {
            id: 1,
            name: "Algebra",
            subject_id: 1,
            description: "Study of mathematical symbols and the rules for manipulating these symbols",
            difficulty: "Intermediate",
            icon: "➗"
        },
        {
            id: 2,
            name: "Geometry",
            subject_id: 1,
            description: "Branch of mathematics concerned with properties, measurements, and relationships of points, lines, angles, surfaces, and solids",
            difficulty: "Beginner",
            icon: "📐"
        },
        {
            id: 3,
            name: "Calculus",
            subject_id: 1,
            description: "Mathematical study of continuous change, focusing on limits, functions, derivatives, integrals, and infinite series",
            difficulty: "Advanced",
            icon: "📈"
        },
        {
            id: 4,
            name: "Physics",
            subject_id: 2,
            description: "Natural science that studies matter, its motion and behavior through space and time",
            difficulty: "Advanced",
            icon: "🔬"
        },
        {
            id: 5,
            name: "Chemistry",
            subject_id: 2,
            description: "Scientific discipline involving the study of matter and its interactions with energy and other matter",
            difficulty: "Intermediate",
            icon: "🧪"
        },
        {
            id: 6,
            name: "Biology",
            subject_id: 2,
            description: "Natural science that studies living organisms and their interactions with each other and their environments",
            difficulty: "Intermediate",
            icon: "🧬"
        }
    ]);

    // Memoize filtered topics to improve performance
    const filteredTopics = useMemo(() => 
        topics.filter(topic => topic.subject_id === parseInt(id)), 
        [topics, id]
    );

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Beginner': return 'bg-green-100 text-green-800';
            case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
            case 'Advanced': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Topics for Subject ID: {id}
                </h2>
                {filteredTopics.length === 0 && (
                    <p className="text-gray-600">No topics found for this subject.</p>
                )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTopics.map(topic => (
                    <div 
                        key={topic.id} 
                        className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-4xl mr-4">{topic.icon}</span>
                            <h3 className="text-xl font-semibold text-gray-800 flex-grow">
                                {topic.name}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(topic.difficulty)}`}>
                                {topic.difficulty}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">
                            {topic.description}
                        </p>
                        <button 
                            onClick={() => navigate(`/Subjects/${id}/Topics/${topic.id}/Chapters/`)}
                            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            See Chapters
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}