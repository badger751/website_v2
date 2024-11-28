import React from 'react';

const LiveSection = () => {
  return (
    <div className="flex flex-col h-screen bg-black text-white p-4">
      {/* Title Area */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Live Stream Title</h1>
        <p className="text-gray-400">This is the live stream description with some details about the video.</p>
      </div>

      {/* Video Player Area */}
      <div className="flex justify-center mb-4">
        <div className="w-full md:w-3/4 lg:w-1/2 overflow-hidden shadow-lg">
          <video
            className="w-full h-auto rounded-lg"
            controls
            autoPlay
          >
            <source src="your_video_url" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Additional Information or Controls */}
      <div className="text-center">
        <p className="text-gray-400">Additional information or player controls can go here.</p>
      </div>
    </div>
  );
};

export default LiveSection;
