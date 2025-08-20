import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown

const API_URL = import.meta.env.VITE_API_URL;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    axios
      .get(`${API_URL}/api/blogs/`)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  // Function to get a truncated version of content for preview
  const getPreviewContent = (content) => {
    const maxLength = 200; // Character limit for preview
    const truncated = content.substring(0, maxLength);
    return truncated.length === maxLength ? truncated + "..." : truncated;
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="flex justify-center items-center ">
      <div className="px-20 pt-40 pb-10 bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat bg-center h-screen ">
        <h1 className="text-5xl font-extrabold text-teal-600 mb-6">Blogs</h1>

        {/* Search Bar */}
        <div className="mb-14 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-xl px-4 py-3 text-xl text-blue-950/70 border border-teal-400 bg-teal-100/30 backdrop-blur-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-950 shadow-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
            {filteredBlogs.map(
              (
                blog, // Map over filteredBlogs
              ) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`} // Navigation target
                  className="p-8 bg-teal-100 rounded-xl shadow border border-blue-950 hover:shadow-lg hover:scale-105 transform transition duration-300 h-['300px'] block" // Added block display for the link
                >
                  <h2 className="text-2xl font-bold text-blue-950">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">By {blog.author}</p>
                  <div className=" mb-4 max-w-none">
                    {/* Render preview content */}
                    {/* Replace dangerouslySetInnerHTML with ReactMarkdown */}
                    <div className="prose prose-sm text-blue-950 max-w-none">
                      <ReactMarkdown>
                        {getPreviewContent(blog.content)}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    {new Date(blog.created_at).toLocaleString()}
                  </p>
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
