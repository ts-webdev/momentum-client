import Link from 'next/link'
import { getServerSession } from 'next-auth'
// import { authOptions } from '../api/auth/[...nextauth]/route'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn how to build modern web applications with the latest features of Next.js 14 and the App Router.',
    content: 'Next.js 14 introduces powerful new features that make building React applications faster and more efficient...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Development',
    image: 'https://i.ibb.co.com/V8f6gzQ/10.png',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS',
    excerpt: 'Discover advanced techniques and best practices for using Tailwind CSS in your projects.',
    content: 'Tailwind CSS has revolutionized how we style web applications. With its utility-first approach...',
    author: 'Mike Chen',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Design',
    image: '/images/blog/tailwind.jpg',
    tags: ['Tailwind', 'CSS', 'Design']
  },
  {
    id: '3',
    title: 'Authentication Best Practices',
    excerpt: 'Implement secure authentication in your Next.js applications using NextAuth.js.',
    content: 'Security is paramount in modern web applications. Learn how to implement robust authentication...',
    author: 'Emily Davis',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Security',
    image: '/images/blog/auth.jpg',
    tags: ['Authentication', 'Security', 'NextAuth']
  },
  {
    id: '4',
    title: 'Responsive Design Principles',
    excerpt: 'Create beautiful, responsive layouts that work perfectly on all devices.',
    content: 'In today\'s multi-device world, responsive design is no longer optional. Learn the principles...',
    author: 'Alex Rodriguez',
    date: '2024-01-08',
    readTime: '8 min read',
    category: 'Design',
    image: '/images/blog/responsive.jpg',
    tags: ['Responsive', 'CSS', 'Mobile']
  },
  {
    id: '5',
    title: 'Performance Optimization Tips',
    excerpt: 'Boost your Next.js application performance with these proven techniques.',
    content: 'Performance is crucial for user experience and SEO. Discover optimization strategies...',
    author: 'Jessica Wang',
    date: '2024-01-05',
    readTime: '4 min read',
    category: 'Performance',
    image: '/images/blog/performance.jpg',
    tags: ['Performance', 'Optimization', 'SEO']
  },
  {
    id: '6',
    title: 'Deployment Strategies',
    excerpt: 'Learn how to deploy your Next.js applications efficiently with Vercel and other platforms.',
    content: 'Deployment is the final step in bringing your application to users. Explore different strategies...',
    author: 'David Kim',
    date: '2024-01-03',
    readTime: '5 min read',
    category: 'DevOps',
    image: '/images/blog/deployment.jpg',
    tags: ['Deployment', 'Vercel', 'DevOps']
  }
]

const categories = [
  { name: 'All', count: 12, slug: 'all' },
  { name: 'Development', count: 5, slug: 'development' },
  { name: 'Design', count: 3, slug: 'design' },
  { name: 'Security', count: 2, slug: 'security' },
  { name: 'Performance', count: 1, slug: 'performance' },
  { name: 'DevOps', count: 1, slug: 'devops' }
]

const featuredPost = blogPosts[0]

export default async function BlogPage() {
//   const session = await getServerSession(authOptions)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar session={session} /> */}
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
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
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">{featuredPost.author}</p>
                          <p className="text-sm text-gray-500">{featuredPost.date}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${featuredPost.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
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

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'Tailwind', 'TypeScript', 'Authentication', 'Deployment', 'Performance', 'SEO'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Subscribe to Newsletter</h3>
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
  )
}