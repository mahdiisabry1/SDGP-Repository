import '../components/CSS/BlogPosts.css';

const BlogPosts = () => {
  return (
    <div className="the-blog-container">
      {/* Image section */}
      <div className="the-image-section">
        <img
          className="the-blog-img"
          src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
          alt=""
        />
      </div>
      {/* Details section */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold">
          10 Uses of artifitial intelligence
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@mahdiisabry</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          inventore beatae laudantium quaerat perspiciatis earum, amet alias
          itaque repellendus unde qui delectus dolore quasi doloribus voluptatem
          nesciunt ducimus quam veritatis!
        </p>
      </div>
    </div>
  );
};

export default BlogPosts;
