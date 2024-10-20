import React, { useContext, useImperativeHandle } from 'react';
import Player from './components/Player';
import './App.css'
import Display from './components/Display';
import Sidebar from './components/Sidebar/';
import { PlayerContext } from './context/PlayerContext';

const App = () => {

  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      {
        songsData.length !== 0
          ? <>
            <div className="h-[90%] flex">
              <Sidebar />
              <Display />
            </div>
            <Player />
          </>
          : null
      }
      <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
    </div>

  )
}

export default App;
