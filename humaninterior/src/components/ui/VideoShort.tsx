"use client";

import { useState } from "react";

const VideoShort = ({ videoId, title, subtitle, thumbnail }: { videoId: string, title: string, subtitle: string, thumbnail?: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div
            className="group relative rounded-xl overflow-hidden shadow-lg aspect-[9/16] max-w-[320px] mx-auto bg-black cursor-pointer"
            onClick={() => setIsPlaying(true)}
        >
            {isPlaying ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            ) : (
                <>
                    <img
                        src={thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                            <span className="material-symbols-outlined text-white text-4xl ml-1">play_arrow</span>
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 transition-all duration-300 group-hover:bg-black/80">
                            <h4 className="font-bold text-white text-sm">{title}</h4>
                            <p className="text-white/70 text-[10px] uppercase tracking-wider font-medium">{subtitle}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default VideoShort;
