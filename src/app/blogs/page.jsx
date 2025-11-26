import Link from "next/link";
import { getServerSession } from "next-auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const categories = [
  { name: "All", count: 12, slug: "all" },
  { name: "Wedding Themes", count: 5, slug: "weddingThemes" },
  { name: "Planning Tips", count: 3, slug: "planningTips" },
  { name: "Floral Design", count: 2, slug: "floralDesign" },
  { name: "Venue Selection", count: 1, slug: "venueSelection" },
  { name: "Photography", count: 1, slug: "photography" },
];

// const featuredPost = blogPosts[0]

export default async function BlogPage() {
  const res = await fetch("http://localhost:3000/blogs/");
  const blogPosts = await res.json();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Blog Posts Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                All Blogs:
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="bg-linear-to-br from-green-400 to-blue-500">
                      <Image src={post.image} alt={post.title} height={100} width={500}/>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                       {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-blue-500">
                            Author : {post.author}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Search Blog
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute right-3 top-3 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    className="flex items-center justify-between w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">{category.name}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-3">
                Subscribe to Newsletter
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest articles and updates delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
