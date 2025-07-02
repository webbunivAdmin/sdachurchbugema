import React, { useEffect, useState } from 'react';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyB5yyv0L_42R7ZOHmE2IhtnyFTxOmM53_Q'; // 🔁 Replace with your actual YouTube API key
  const CHANNEL_ID = 'UCoTQ-9-dDGk_OriZMLdnDbA'; // 🔁 Replace with your actual channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
        );
        const data = await res.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Failed to fetch YouTube videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className=" grid md:grid-cols-3 gap-5 color ">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <iframe
            width="100%"
            height="215"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default YouTubeVideos;
