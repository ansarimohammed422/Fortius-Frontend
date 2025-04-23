import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullBlog = () => {
  const { id } = useParams(); // Use the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/blogs/${id}/`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  // Function to split content by newlines and remove empty paragraphs
  const removeNewlinesAndSplit = (content) => {
    return content
      .split("\n")  // Split by \n character
      .map((para) => para.trim())  // Trim extra spaces around each paragraph
      .filter((para) => para.length > 0);  // Remove empty paragraphs
  };

  return (
    <div className=" px-20 pt-32 pb-20 bg-white min-h-screen">
      {loading ? (
        <p>Loading blog...</p>
      ) : (
        blog && (
          <div className="bg-teal-50 p-6  rounded-xl border border-blue-950 h-full  shadow">
            <h1 className="text-3xl font-bold text-blue-950 mb-4">{blog.title}</h1>
            <p className="text-gray-600 text-sm mb-4">By {blog.author}</p>
            <div className="text-gray-800">
              {/* Render each paragraph separately after splitting
              {removeNewlinesAndSplit(blog.content).map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))} */}
               <div
                  className="prose prose-xl max-w-none prose-h1:text-5xl prose-ul:text-xl prose-ol:text-xl"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
            <p className="text-teal-400  text-xs mt-4">
              {new Date(blog.created_at).toLocaleString()}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default FullBlog;
