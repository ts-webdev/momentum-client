"use client"
import React, { useState, useEffect } from 'react'

export default function ManageEvent() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteLoading, setDeleteLoading] = useState(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:3000/events')
      const data = await response.json()
      setEvents(data)
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this event?')) {
      return
    }

    setDeleteLoading(id)
    try {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setEvents(events.filter(event => event._id !== id))
      } else {
        throw new Error('Failed to delete event')
      }
    } catch (error) {
      console.error('Error deleting event:', error)
      alert('Failed to delete event. Please try again.')
    } finally {
      setDeleteLoading(null)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#BDE0FE] to-[#FFC8DD] py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FFAFCC] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Loading events...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#BDE0FE] to-[#FFC8DD] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Manage Events</h1>
          <p className="text-gray-600 text-lg">
            View, manage, and organize all your events in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">{events.length}</div>
            <div className="text-gray-600">Total Events</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {events.filter(event => event.priority?.toLowerCase() === 'high').length}
            </div>
            <div className="text-gray-600">High Priority</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {events.filter(event => new Date(event.date) > new Date()).length}
            </div>
            <div className="text-gray-600">Upcoming</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {events.filter(event => event.category === 'Wedding').length}
            </div>
            <div className="text-gray-600">Weddings</div>
          </div>
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-4 bg-linear-to-r from-[#FFAFCC] to-[#FFC8DD]">
            <h2 className="text-xl font-bold text-gray-800">All Events ({events.length})</h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date & Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {events.map((event) => (
                  <tr key={event._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={event.imageURL}
                          alt={event.title}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/48?text=No+Image'
                          }}
                        />
                        <div>
                          <div className="text-sm font-semibold text-gray-900 line-clamp-1">
                            {event.title}
                          </div>
                          <div className="text-sm text-gray-500 line-clamp-1">
                            {event.shortDescription}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {event.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{formatDate(event.date)}</div>
                      <div className="text-sm font-semibold text-green-600">
                        {formatPrice(event.price)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(event.priority)}`}>
                        {event.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {/* Add view functionality */}}
                          className="bg-[#BDE0FE] text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#a8d4fc] transition-colors flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(event._id)}
                          disabled={deleteLoading === event._id}
                          className="bg-[#FFAFCC] text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#ff99c0] transition-colors flex items-center disabled:opacity-50"
                        >
                          {deleteLoading === event._id ? (
                            <>
                              <div className="w-4 h-4 border-2 border-gray-800 border-t-transparent rounded-full animate-spin mr-1"></div>
                              Deleting...
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete
                            </>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden p-4 space-y-4">
            {events.map((event) => (
              <div key={event._id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <img
                    src={event.imageURL}
                    alt={event.title}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/64?text=No+Image'
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{event.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">{event.shortDescription}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-500">Category</div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {event.category}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Priority</div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(event.priority)}`}>
                      {event.priority}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500">Date</div>
                    <div className="text-sm font-medium text-gray-900">{formatDate(event.date)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Price</div>
                    <div className="text-sm font-semibold text-green-600">{formatPrice(event.price)}</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => {/* Add view functionality */}}
                    className="flex-1 bg-[#BDE0FE] text-gray-800 py-2 rounded-lg text-sm font-semibold hover:bg-[#a8d4fc] transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    disabled={deleteLoading === event._id}
                    className="flex-1 bg-[#FFAFCC] text-gray-800 py-2 rounded-lg text-sm font-semibold hover:bg-[#ff99c0] transition-colors flex items-center justify-center disabled:opacity-50"
                  >
                    {deleteLoading === event._id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-800 border-t-transparent rounded-full animate-spin mr-1"></div>
                        Deleting
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {events.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500">Get started by creating your first event.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}