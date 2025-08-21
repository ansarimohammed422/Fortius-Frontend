// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ReactMarkdown from "react-markdown"; // Import ReactMarkdown

// const API_URL = import.meta.env.VITE_API_URL;

// const FullBlog = () => {
//   const { id } = useParams(); // Use the blog ID from the URL
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/api/blogs/${id}/`)
//       .then((response) => {
//         setBlog(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching blog:", error);
//         setLoading(false);
//       });
//   }, [id]);

//   // Function to split content by newlines and remove empty paragraphs
//   // const removeNewlinesAndSplit = (content) => {
//   //   return content
//   //     .split("\n")  // Split by \n character
//   //     .map((para) => para.trim())  // Trim extra spaces around each paragraph
//   //     .filter((para) => para.length > 0);  // Remove empty paragraphs
//   // };

//   return (
//     <div className=" px-20 pt-32 pb-20 bg-white min-h-screen">
//       {loading ? (
//         <p>Loading blog...</p>
//       ) : (
//         blog && (
//           <div className="bg-teal-50 p-6  rounded-xl border border-blue-950 h-full  shadow">
//             <h1 className="text-3xl font-bold text-blue-950 mb-4">
//               {blog.title}
//             </h1>
//             <p className="text-gray-600 text-sm mb-4">By {blog.author}</p>
//             <div className="text-blue-950">
//               {/* Render each paragraph separately after splitting
//               {removeNewlinesAndSplit(blog.content).map((paragraph, index) => (
//                 <p key={index} className="mb-4">{paragraph}</p>
//               ))} */}
//               {/* Replace dangerouslySetInnerHTML with ReactMarkdown */}
//               <div className="prose prose-xl max-w-none prose-h1:text-5xl prose-ul:text-xl prose-ol:text-xl">
//                 <ReactMarkdown>{blog.content}</ReactMarkdown>
//               </div>
//             </div>
//             <p className="text-teal-400  text-xs mt-4">
//               {new Date(blog.created_at).toLocaleString()}
//             </p>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default FullBlog;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const API_URL = import.meta.env.VITE_API_URL;

const FullBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/blogs/${id}/`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white min-h-screen">
      {loading ? (
        <p className="text-center text-lg sm:text-xl text-blue-950">
          Loading blog...
        </p>
      ) : (
        blog && (
          <div className="bg-teal-50 p-4 sm:p-6 md:p-8 lg:p-6 rounded-xl border border-blue-950 h-full shadow max-w-full mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm md:text-sm mb-4">
              By {blog.author}
            </p>
            <div className="text-blue-950">
              <div className="prose prose-sm sm:prose md:prose-lg lg:prose-xl max-w-full prose-h1:text-3xl sm:prose-h1:text-4xl md:prose-h1:text-5xl prose-ul:text-sm sm:prose-ul:text-base md:prose-ul:text-lg prose-ol:text-sm sm:prose-ol:text-base md:prose-ol:text-lg">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
              </div>
            </div>
            <p className="text-teal-400 text-xs sm:text-sm mt-4">
              {new Date(blog.created_at).toLocaleString()}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default FullBlog;
