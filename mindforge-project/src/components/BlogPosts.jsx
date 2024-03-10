/* eslint-disable react/prop-types */
import '../components/CSS/BlogPosts.css';
import { Link } from "react-router-dom";

const BlogPosts = ({post}) => {
  return (
    <div className="the-blog-container">
      {/* Image section */}
      <div className="the-image-section">
        <img className="the-blog-img" src={post.photo} alt="" />
      </div>
      {/* Details section */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold">
            {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        <p>{post.desc.slice(0, 200) + "  .....ReadMore"}</p>
      </div>
    </div>
  );
};

export default BlogPosts;
