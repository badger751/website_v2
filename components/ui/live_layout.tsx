import React from 'react';

interface LiveStream {
  uri: string;
  title: string;
  description: string;
}

const LiveLayout = ({ live }: { live: LiveStream }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        {/* Video Box */}
        <iframe
          src={live.uri}
          className="w-full aspect-video"
          title={live.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="text-3xl font-bold mb-4">{live.title}</h1>
      <p className="text-lg">{live.description}</p>
    </div>
  );
};

export default LiveLayout;
