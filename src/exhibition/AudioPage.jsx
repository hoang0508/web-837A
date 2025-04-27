import React from "react";
import { Volume2, VolumeOff, VolumeX } from "lucide-react"; // hoặc icon khác tùy mày
import useAudioPlayer from "../hooks/useAudioPlayer";

const AudioPage = ({ song }) => {
  const { isPlaying, togglePlay } = useAudioPlayer(song);

  return (
    <button className="py-5" onClick={togglePlay}>
      {isPlaying ? (
        <div className="flex bg-red-400 items-center gap-2 py-3 px-3 text-white rounded">
          <Volume2 />
          <span>Đang phát lời thuyết minh</span>
        </div>
      ) : (
        <div className="flex bg-red-500 items-center gap-2 py-3 px-3 text-white rounded">
          <VolumeX />
          <span>Nghe thuyết minh</span>
        </div>
      )}
    </button>
  );
};

export default AudioPage;
