import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { URL } from '../url';
import NavBar from '../components/NavBar';

const RoadmapDetails = () => {
  const roadmapId = useParams().id;
  const { user } = useContext(UserContext);
  const [roadmap, setRoadmap] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(URL + '/api/roadmaps/' + roadmapId);
        setRoadmap(response.data);
      } catch (error) {
        console.error('Error fetching roadmap:', error);
      }
    };

    fetchRoadmap();
  }, [roadmapId]);

  useEffect(() => {
    const fetchRoadmapComments = async () => {
      try {
        const response = await axios.get(URL + '/api/comments/roadmap/' + roadmapId);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchRoadmapComments();
  }, [roadmapId]);

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        URL + '/api/comments/create',
        {
          comment: comment,
          author: user.username,
          postId: roadmapId,
          userId: user._id,
        },
        { withCredentials: true }
      );

      window.location.reload(true);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="px-8 md:px-[200px] mt-40">
        <h1 className="text-2xl font-bold text-black md:text-3xl">{roadmap.title}</h1>
        <p>@{roadmap.username}</p>
        <p>{new Date(roadmap.updatedAt).toString().slice(16, 24)}</p>
        <p>{roadmap.description}</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            {roadmap.categories?.map((category, index) => (
              <div key={index} className="bg-gray-300 rounded px-3 py-1">
                {category}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {comments?.map((comment) => (
            <div key={comment._id}>
              <p>{comment.comment}</p>
              <p>By: {comment.author}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
          />
          <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default RoadmapDetails;
