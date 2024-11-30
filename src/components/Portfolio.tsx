import React, { useRef } from 'react';
import vid1 from '../assets/video/vid1.mp4'; // Import your local videos
import vid2 from '../assets/video/vid2.mp4';

interface Project {
  title: string;
  category: string;
  video: string;
  views: string;
}

export function Portfolio() {
  const projects: Project[] = [
    {
      title: "Fili Coffee",
      category: "Promotion",
      video: vid1,
      views: "500K+"
    },
    {
      title: "Fili Coffee",
      category: "Promotion",
      video: vid2,
       views: "500K+"
    },
  ];

  return (
    <section className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trending Content</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our latest viral hits and trending campaigns across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {projects.map((project) => (
            <VideoCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle play button click
  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();  // Play the video if it's paused
      } else {
        videoRef.current.pause();  // Pause the video if it's playing
      }
    }
  };

  // Handle mute/unmute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;  // Toggle mute state
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* Video element */}
      <video
        ref={videoRef}  // Attach the ref to the video element
        src={project.video}  // Video source
        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
        loop
        controls
        title={project.title}  // Optional: for accessibility
        aria-label={project.title}  // Optional: for screen readers
      />


      {/* Overlay for video info */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/90 via-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-violet-400 mb-2">
            <span className="text-sm">{project.views} views</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-zinc-300">{project.category}</p>
        </div>
      </div>

      {/* Custom Play button SVG overlay */}
      <div
        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        onClick={handlePlay}  // Handle click to play/pause video
      >
        {PlayIcon()}
      </div>

      {/* Mute/Unmute Button */}
      <button
        className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full"
        onClick={toggleMute}  // Handle click to mute/unmute video
      >
        Toggle Mute
      </button>
    </div>
  );
}

// Custom SVG for the Play button
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 22V2l18 10L3 22z" />
  </svg>
);
