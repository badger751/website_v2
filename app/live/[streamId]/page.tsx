"use client"

import React, { useEffect, useState } from 'react';
import LiveLayout from '@/components/ui/live_layout';
import { fetchLiveStream } from '@/lib/fetchdata';

export default function LivePage({ streamId }: { streamId: string }) {
  const [live, setLive] = useState<{ uri: string; title: string; description: string } | null>(null);
  streamId = '5';

  useEffect(() => {
    const getLiveStream = async () => {
      try {
        const liveData = await fetchLiveStream(streamId);
        setLive(liveData);
      } catch (error) {
        console.error('Error fetching live stream:', error);
      }
    };

    if (streamId) {
      getLiveStream();
    }
  }, [streamId]);

  return (
    <div>
      {live ? <LiveLayout live={live} /> : <p>Loading live stream...</p>}
    </div>
  );
}
