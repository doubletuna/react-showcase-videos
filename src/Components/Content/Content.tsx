import React from 'react'
import Video from '../ContentItem/ContentItem'
import './Content.scss'
import { IDoc } from '../../Interfaces/interfaces'

interface IContentProps {
  mintName: string
  docs: IDoc[]
}

const Content: React.FC<IContentProps> = ({mintName, docs}: IContentProps) => {
  return (
    <div className="content-wrapper">
      <div className="content-headline">{mintName}</div>
      <div className="content-body">
        {
          docs && docs.map((c: any) => {
            return c.videos[0] && <Video key={c._id} image={c.videos[0].previewImage} video={c.videos[0].url} />
          })
        }
      </div>
    </div>
  )
}

export default Content
