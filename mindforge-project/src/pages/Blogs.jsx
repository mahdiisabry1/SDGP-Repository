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

  return (
    <>
      <NavBar />
      <div>
        <div className="py-40 bg-black text-center text-white px-4 outerLayer-blog">
          <h1 className="text-5xl mt-8">Whats your story Today</h1>
          <p className="mt-8">
            Start your blog today and join the community of writers and readers
          </p>
        </div>

        {/* The Blog Container */}
        <div className="max-w-7xl mx-auto">
          {posts.map((post) => (
            <>
              <Link to={user ? `/posts/post/${post._id}` : "/"}>
                <BlogPosts key={post._id} post={post} />
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
