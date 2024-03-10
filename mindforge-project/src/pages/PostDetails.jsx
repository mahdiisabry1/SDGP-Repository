import axios from "axios";
import { useParams } from "react-router-dom";
import { URL, IF } from "../url";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PostDetails = () => {

  const postId = useParams().id
  const [post, setPost] = useState({})
  const {user} = useContext(UserContext) 

  const fetchPosts = async() => {
    try {
      const res = await axios.get(URL+"/api/posts/"+postId)
      setPost(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [postId])

  return (
    <div className="px-8 md:px-[200px] mt-40">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">
          {post.title}
        </h1>
        {user?._id === post?.userId && <div className="flex items-center justify-center space-x-2">
          <span className="cursor-pointer">Edit</span>
          <span className="cursor-pointer">Delete</span>
        </div>}
        
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@{post.username}</p>
        <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
      </div>
      <img src={IF+post.photo} className="w-1/2 relative left-1/4" alt="" />
      <p>{post.desc}</p>
      <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>Categories:</p>
        <div className="flex justify-center items-center space-x-2">
        {post.categories?.map((c, i) =>(
          <div key={i} className="bg-gray-300 rounded px-3 py-1">{c}</div>
        ))}
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3>comments</h3>
      </div>
    </div>
  );
}

export default PostDetails
