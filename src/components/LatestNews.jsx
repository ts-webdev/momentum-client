
import Link from 'next/link';
import React from 'react';

export default async function LatestNews() {
    const res = await fetch("http://localhost:3000/blogs/latest")
    const blogPosts = await res.json()
   

    return (
        <div className='my-48 max-w-7xl mx-auto px-5'>
            {/* Header Section */}
            <div className='text-center mb-16'>
                <h2 className="text-pink-500 text-lg font-semibold tracking-widest uppercase mb-3">
                    Our Events Blog
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Latest News & Blog
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover the latest trends, tips, and inspiration for your perfect wedding day
                </p>
            </div>

            {/* Blog Posts Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {blogPosts.map((post) => (
                    <div 
                        key={post._id}
                        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Image Container */}
                        <div className="relative overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-sm text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                                    {post.category}
                                </span>
                            </div>
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Meta Information */}
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                <div className="flex items-center space-x-2">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <span>4.9</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>

                            {/* Author */}
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-linear-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <span className="text-sm text-gray-700 font-medium">{post.author}</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read More Button */}
                            <button className="w-full bg-linear-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn">
                                <span>Read Article</span>
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
                <Link href="/blogs" className="btn btn-primary rounded-full text-white">
                    View All Blogs
                </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200">
                {[
                    { number: "500+", label: "Weddings Planned" },
                    { number: "50+", label: "Theme Ideas" },
                    { number: "1k+", label: "Happy Couples" },
                    { number: "4.9", label: "Average Rating" }
                ].map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Custom Styles */}
            {/* <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .group:hover .group-hover\\:scale-110 {
                    transform: scale(1.1);
                }
            `}</style> */}
        </div>
    );
}