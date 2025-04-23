import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs/")
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

  return (
    <section className="flex justify-center items-center">
    <div className="px-20 pt-40 pb-10 bg-[url('./assets/New_teal.jpg')] bg-cover bg-no-repeat bg-center ">
      <h1 className="text-5xl font-extrabold text-teal-600 mb-6">Blogs</h1>
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-6 bg-teal-50 rounded-xl shadow border border-blue-950 hover:shadow-lg hover:scale-105 transform transition duration-300">
              <h2 className="text-2xl font-bold text-blue-950">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">By {blog.author}</p>
              <div className="prose text-gray-800 mb-4 max-w-none">
                {/* Render preview content */}
                <div dangerouslySetInnerHTML={{__html: getPreviewContent(blog.content)}}></div>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                {new Date(blog.created_at).toLocaleString()}
              </p>
              <Link
                to={`/blog/${blog.id}`} // This will link to a full blog page
                className="text-teal-600 hover:text-teal-800 mt-4 inline-block"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
};

export default Blog;
