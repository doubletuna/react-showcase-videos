import React from 'react'
import './ContentItem.scss'

interface IVideoProps {
  video: string
  image: string
}

const Video: React.FC<IVideoProps> = ({ image, video }: IVideoProps) => {

  const handleMouseOverVideo = (e: any) => {
    e.target.play()
  }

  const handleMouseOutVideo = (e: any) => {
    e.target.pause()
  }

  return (
    <div className="video-wrapper">
      <video
        poster={image}
        onMouseOver={(e) => { handleMouseOverVideo(e) }}
        onMouseOut={(e) => { handleMouseOutVideo(e) }}
        src={`${video}#t=1`}
        muted={true}>
      </video>
    </div>
  )
}

export default Video
