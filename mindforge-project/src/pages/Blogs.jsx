import { Link } from "react-router-dom";
import BlogPosts from "../components/BlogPosts";
import "../components/CSS/Blogs.css";
import axios from "axios";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import NavBar from "../components/NavBar";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0)
  console.log(user);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= posts.length &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="py-24 bg-gray-800 text-center text-white px-4 outerLayer-blog">
          <h1 className="text-5xl mt-8">Whats your story Today</h1>
          <p className="mt-8">
            Start your blog today and join the community of writers and readers
          </p>
        </div>

        {/* The Blog Container */}
        <div className="max-w-7xl mx-auto mb-8">
          {posts
            .slice(page * 3 - 3, page * 3)
            .map((post) => (
              <>
                <Link to={user ? `/posts/post/${post._id}` : "/"}>
                  <BlogPosts key={post._id} post={post} />
                </Link>
              </>
            ))
            .reverse()}
          {posts.length > 0 && (
            <div className="pagination">
              <span
                onClick={() => selectPageHandler(page - 1)}
                className={page > 1 ? "" : "pagination__disable"}
              >
                ◀
              </span>

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

export default Blogs;
