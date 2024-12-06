import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const dashboardStats = [
    { 
      title: "Total Subjects", 
      value: 4, 
      icon: "📚", 
      color: "bg-blue-100 text-blue-800" 
    },
    { 
      title: "Total Topics", 
      value: 6, 
      icon: "🧠", 
      color: "bg-green-100 text-green-800" 
    },
    { 
      title: "Total Chapters", 
      value: 24, 
      icon: "📖", 
      color: "bg-purple-100 text-purple-800" 
    },
  ]

  const quickActions = [
    { 
      title: "View Subjects", 
      description: "Explore all available subjects", 
      link: "/Subjects", 
      icon: "🔍",
      color: "bg-blue-500" 
    },
    { 
      title: "Recent Progress", 
      description: "Check your learning journey", 
      link: "#", 
      icon: "📊",
      color: "bg-green-500" 
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Course Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive platform for learning and tracking educational progress
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Dashboard Overview
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {dashboardStats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.color} p-6 rounded-lg shadow-md flex items-center space-x-4`}
            >
              <span className="text-4xl">{stat.icon}</span>
              <div>
                <p className="text-lg font-semibold">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Quick Actions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {quickActions.map((action, index) => (
            <Link 
              to={action.link} 
              key={index} 
              className={`${action.color} text-white p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{action.icon}</span>
                <div>
                  <p className="text-xl font-semibold">{action.title}</p>
                  <p className="text-sm">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}