import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/collage-video.mp4'

export const VideoPlayer = ({playState,setPlayState}) => {
   const player = React.createRef()
    const closeVideo = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`videoplayer  ${playState?'' : 'hide'}`}
    onClick={closeVideo} ref={player}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}
