import React from "react";
import { assets } from "../assets/assets";
import { songsData } from "../assets/assets";

function Player() {
  return (
    <div className="h-[10%] flex justify-between items-center bg-black text-white px-4">
        <div className="hidden lg:flex items-center gap-4">
            <img className="w-12" src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
             
        </div>
        <div className="flex flex-col items-center m-auto gap-1">
            <div className="gap-4 flex">
                <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
                <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
                <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
                <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
                <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
            </div>
            <div className="flex items-center gap-5">
              <p>1:06</p>
              <div className="max-w-[500px] w-[60vw] bg-gray-300 rounded-full cursor-pointer">
                <hr className="h-1 border-none w-0 bg-green-800 rounded-full"/>
              </div>
            <p>3:20</p>
            </div>
        </div>
        <div className="hidden lg:flex opacity-75 items-center gap-2">
          <img className="w-4" src={assets.plays_icon} alt="" />
          <img className="w-4" src={assets.mic_icon} alt="" />
          <img className="w-4" src={assets.queue_icon} alt="" />
          <img className="w-4" src={assets.speaker_icon} alt="" />
          <img className="w-4" src={assets.volume_icon} alt="" />
          <div className="w-20 bg-slate-50 h-1 rounded">

          </div>
          <img className="w-4" src={assets.mini_player_icon} alt="" />
          <img className="w-4" src={assets.zoom_icon} alt="" />

        </div>
    </div>
  );
}

export default Player;
