import { Link } from "react-router-dom";
import BlogPosts from "../components/BlogPosts";
import '../components/CSS/Blogs.css'


const Blogs = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4 outerLayer-blog">
        <h1 className="text-5xl mt-8">Whats your story Today</h1>
        <p className="mt-8">
          Start your blog today and join the community of writers and readers
        </p>
      </div>

      {/* The Blog Container */}
      <div className="max-w-7xl mx-auto">
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
      </div>
    </div>
  );
};

export default Blogs;
