/* eslint-disable react/prop-types */

const RoadmapCreation = ({post}) => {
  return (
    <div className="the-blog-container">
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2"></div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapCreation
