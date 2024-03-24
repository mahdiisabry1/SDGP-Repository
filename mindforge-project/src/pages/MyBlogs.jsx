/* eslint-disable react/prop-types */

import React from 'react'
import '../components/CSS/MyBlogs.css'
import { IF } from "../url";

const MyBlogs = ({p}) => {
  return (
    <div className="the-blog-container">
      {/* Image section */}
      <div className="the-image-section">
        <img className="the-blog-img" src={IF + p.photo} alt="" />
      </div>
      {/* Details section */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold myblog-style">{p.title}</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 justify-between md:mb-4">
          <p className="myblog-style">@{p.username}</p>
          <div className="flex space-x-2">
            <p className="myblog-style">
              {new Date(p.updatedAt).toString().slice(0, 15)}
            </p>
            <p className="myblog-style">
              {new Date(p.updatedAt).toString().slice(16, 24)}
            </p>
          </div>
        </div>
        <p className="myblog-style">
          {p.desc.slice(0, 200) + "  .....ReadMore"}
        </p>
      </div>
    </div>
  );
}

export default MyBlogs