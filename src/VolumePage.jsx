import React from "react";
import useAudioPlayer from "./hooks/useAudioPlayer";
import { Volume2, VolumeOff } from "lucide-react";

const VolumePage = ({ song }) => {
  const { isPlaying, togglePlay } = useAudioPlayer(song);
  return (
    <button className="fixed bottom-3 right-[30px]" onClick={togglePlay}>
      {" "}
      {isPlaying ? (
        <Volume2 size={40} strokeWidth={1.75} />
      ) : (
        <VolumeOff size={40} strokeWidth={1.75} />
      )}{" "}
    </button>
  );
};

export default VolumePage;
