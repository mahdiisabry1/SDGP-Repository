import { BiEdit } from 'react-icons/bi'
import { MdDelete } from "react-icons/md";


const PostDetails = () => {
  return (
    <div className="px-8 md:px-[200px] mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">
          10 Uses of Artifitial Intelligence
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <p>
            <BiEdit />
          </p>
          <p>
            <MdDelete />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@mahdiisabry</p>
        <p>16:45</p>
      </div>
      <img
        src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
        className="w-full mx-auto mt-8"
        alt=""
      />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quidem consectetur quas nesciunt iusto tempore numquam quibusdam eligendi. Aspernatur adipisci magni similique tempore incidunt dolores unde quas esse inventore rem.</p>
    </div>
  );
}

export default PostDetails
