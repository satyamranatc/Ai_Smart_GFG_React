import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import AskAi from "../../utils/AskAi";

export default function Chapters() {
    const { id, Tid } = useParams();
    const [aiResponse, setAiResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    let [chapters, setChapters] = useState([
        // Math -> Algebra
        { id: 1, name: "Linear Equations", topic_id: 1, subject_id: 1 },
        { id: 2, name: "Quadratic Equations", topic_id: 1, subject_id: 1 },
        { id: 3, name: "Polynomials", topic_id: 1, subject_id: 1 },
      
        // Math -> Geometry
        { id: 4, name: "Triangles", topic_id: 2, subject_id: 1 },
        { id: 5, name: "Circles", topic_id: 2, subject_id: 1 },
        { id: 6, name: "Coordinate Geometry", topic_id: 2, subject_id: 1 },
      
        // Math -> Calculus
        { id: 7, name: "Limits and Continuity", topic_id: 3, subject_id: 1 },
        { id: 8, name: "Derivatives", topic_id: 3, subject_id: 1 },
        { id: 9, name: "Integrals", topic_id: 3, subject_id: 1 },
      
        // Science -> Physics
        { id: 10, name: "Newton's Laws of Motion", topic_id: 4, subject_id: 2 },
        { id: 11, name: "Work, Energy, and Power", topic_id: 4, subject_id: 2 },
        { id: 12, name: "Gravitation", topic_id: 4, subject_id: 2 },
      
        // Science -> Chemistry
        { id: 13, name: "Atomic Structure", topic_id: 5, subject_id: 2 },
        { id: 14, name: "Periodic Table", topic_id: 5, subject_id: 2 },
        { id: 15, name: "Chemical Bonding", topic_id: 5, subject_id: 2 },
      
        // Science -> Biology
        { id: 16, name: "Cell Structure and Function", topic_id: 6, subject_id: 2 },
        { id: 17, name: "Photosynthesis", topic_id: 6, subject_id: 2 },
        { id: 18, name: "Human Anatomy", topic_id: 6, subject_id: 2 },
      
        // History -> Placeholder chapters (no topics provided)
        { id: 19, name: "Ancient Civilizations", topic_id: null, subject_id: 3 },
        { id: 20, name: "Medieval Europe", topic_id: null, subject_id: 3 },
        { id: 21, name: "World Wars", topic_id: null, subject_id: 3 },
      
        // Geo -> Placeholder chapters (no topics provided)
        { id: 22, name: "World Map", topic_id: null, subject_id: 4 },
        { id: 23, name: "Earth's Structure", topic_id: null, subject_id: 4 },
        { id: 24, name: "Climate Zones", topic_id: null, subject_id: 4 },
      ]);

    // Memoize filtered chapters to improve performance
    const filteredChapters = useMemo(() => 
        chapters.filter(chapter => 
            chapter.topic_id === parseInt(Tid) && 
            chapter.subject_id === parseInt(id)
        ), 
        [chapters, Tid, id]
    );

    async function handleClick(chapterName) {
        try {
            setIsLoading(true);
            const response = await AskAi(`Explain This "${chapterName}" Topic To a LayMab in 150 Words in Hinglish`);
            setAiResponse(response);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setAiResponse(null);
        } finally {
            setIsLoading(false);
        }
    }

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Beginner': return 'bg-green-100 text-green-800';
            case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
            case 'Advanced': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-00';
        }
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Chapters for Topic ID: {Tid} in Subject ID: {id}
                </h2>
                {filteredChapters.length === 0 && (
                    <p className="text-gray-600">No chapters found for this topic.</p>
                )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredChapters.map(chapter => (
                    <div 
                        key={chapter.id} 
                        className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-4xl mr-4">{chapter.icon}</span>
                            <h3 className="text-xl font-semibold text-gray-800 flex-grow">
                                {chapter.name}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(chapter.difficulty)}`}>
                                {chapter.difficulty}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm">
                            {chapter.description}
                        </p>
                        <div className="flex space-x-2">
                            <button 
                                onClick={() => handleClick(chapter.name)}
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Start Learning
                            </button>
                            <button 
                                className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                Preview
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Response Section */}
            {isLoading && (
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                    <div className="animate-spin inline-block w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    <p className="mt-2 text-gray-600">Generating AI content...</p>
                </div>
            )}

            {aiResponse && (
                <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Generated Content</h3>
                    <div 
                        className="text-gray-700 leading-relaxed prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: aiResponse }}
                    />
                </div>
            )}
        </div>
    );
}