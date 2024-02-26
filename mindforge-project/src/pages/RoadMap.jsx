import React from 'react';

const RoadMap = () => {
  return (
    <div className='py-10 px-6 bg-gray-900 text-white'>
      <h2 className='text-3xl font-bold mb-6'>Development Roadmap</h2>
      <div className='flex flex-col space-y-4'>
        <div className='flex items-center'>
          <div className='bg-green-500 w-4 h-4 rounded-full mr-4'></div>
          <div>
            <h3 className='text-xl font-semibold'>Phase 1: Planning</h3>
            <p className='text-gray-400'>Define project goals and requirements</p>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='bg-yellow-500 w-4 h-4 rounded-full mr-4'></div>
          <div>
            <h3 className='text-xl font-semibold'>Phase 2: Design</h3>
            <p className='text-gray-400'>Create wireframes and design UI/UX</p>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='bg-blue-500 w-4 h-4 rounded-full mr-4'></div>
          <div>
            <h3 className='text-xl font-semibold'>Phase 3: Development</h3>
            <p className='text-gray-400'>Write code and implement features</p>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='bg-purple-500 w-4 h-4 rounded-full mr-4'></div>
          <div>
            <h3 className='text-xl font-semibold'>Phase 4: Testing</h3>
            <p className='text-gray-400'>Perform testing and debugging</p>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='bg-red-500 w-4 h-4 rounded-full mr-4'></div>
          <div>
            <h3 className='text-xl font-semibold'>Phase 5: Deployment</h3>
            <p className='text-gray-400'>Release the application to production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
