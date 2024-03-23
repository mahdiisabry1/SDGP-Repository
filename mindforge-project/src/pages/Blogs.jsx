import { Link } from "react-router-dom";
import BlogPosts from "../components/BlogPosts"; // Importing the BlogPosts component
import "../components/CSS/Blogs.css"; // Importing CSS file for custom styles
import axios from "axios";
import { URL } from "../url"; // Importing URL from external source
import { useContext, useEffect, useState } from "react"; // Importing necessary hooks
import { UserContext } from "../context/UserContext"; // Importing UserContext
import NavBar from "../components/NavBar"; // Importing NavBar component

// Define the Blogs component
const Blogs = () => {
  // State variables for managing blog posts, user context, and pagination
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [page, setPage] = useState(1);

  // Fetching blog posts from the server
  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch blog posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to handle page selection
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= posts.length &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  // Rendering the component
  return (
    <>
      <NavBar /> {/* Render the NavBar component */}
      <div>
        {/* Hero section */}
        <div className="py-24 bg-gray-800 text-center text-white px-4 outerLayer-blog">
          <h1 className="text-5xl mt-8">Whats your story Today</h1>
          <p className="mt-8">
            Start your blog today and join the community of writers and readers
          </p>
        </div>

        {/* The Blog Container */}
        <div className="max-w-7xl mx-auto mb-8">
          {/* Mapping through and rendering the blog posts */}
          {posts
            .slice(page * 3 - 3, page * 3)
            .map((post) => (
              <>
                {/* Link to individual post */}
                <Link to={user ? `/posts/post/${post._id}` : "/"}>
                  <BlogPosts key={post._id} post={post} />
                </Link>
              </>
            ))
            .reverse()}
          {/* Pagination */}
          {posts.length > 0 && (
            <div className="pagination">
              {/* Previous page button */}
              <span
                onClick={() => selectPageHandler(page - 1)}
                className={page > 1 ? "" : "pagination__disable"}
              >
                ◀
              </span>

              {/* Page numbers */}
              {[...Array(Math.ceil(posts.length / 3))].map((_, i) => {
                return (
                  <span
                    key={i}
                    className={page === i + 1 ? "pagination__selected" : ""}
                    onClick={() => selectPageHandler(i + 1)}
                  >
                    {i + 1}
                  </span>
                );
              })}

              {/* Next page button */}
              <span
                onClick={() => selectPageHandler(page + 1)}
                className={page < posts.length / 3 ? "" : "pagination__disable"}
              >
                ▶
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs; // Export the Blogs component
