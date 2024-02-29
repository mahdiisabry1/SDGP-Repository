
const PostDetails = () => {
  return (
    <div className="px-8 md:px-[200px] mt-40">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">
          10 Uses of Artifitial Intelligence
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <span className="cursor-pointer">Edit</span>
          <span className="cursor-pointer">Delete</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@mahdiisabry</p>
        <p>16:45</p>
      </div>
      <img
        src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
        className="w-1/2 relative left-1/4"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quidem
        consectetur quas nesciunt iusto tempore numquam quibusdam
        eligendi.Aspernatur adipisci magni similique tempore incidunt dolores
        unde quas esse inventore rem.
      </p>
      <div className="flex items-center mt-8 space-x-4 font-semibold">
        <p>Categories</p>
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-gray-300 rounded px-3 py-1">Tech</div>
          <div className="bg-gray-300 rounded px-3 py-1">AI</div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3>comments</h3>
      </div>
    </div>
  );
}

export default PostDetails
