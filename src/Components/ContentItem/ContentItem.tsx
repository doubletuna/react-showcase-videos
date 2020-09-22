import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import './ContentItem.scss'

interface IVideoProps {
  video: string
  image: string
}

const Video: React.FC<IVideoProps> = ({ image, video }: IVideoProps) => {
  const [playVideo, setplayVideo] = useState<boolean>(false)
  const [displayImage, setDisplayImage] = useState<string>(image)

  const handleMouseOverVideo = () => {
    setplayVideo(true)
    setDisplayImage('')
  }

  const handleMouseOutVideo = () => {
    setplayVideo(false)
    setDisplayImage(image)
  }

  return (
    <div className="video-wrapper">
      <ReactPlayer url={video} className="react-player" width='100%'
        height='100%'
        light={displayImage}
        onMouseOver={() => { handleMouseOverVideo() }}
        onMouseOut={() => { handleMouseOutVideo() }}
        playing={playVideo}
      />
    </div>
  )
}

export default Video
