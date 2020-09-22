import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../../Redux/app.state'
import { fetchMints, fetchContent, setSelectedMint } from '../../Redux/global/global.actions'
import { IMint, IDoc, IFetch } from '../../Interfaces/interfaces'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import './Main.scss'

interface IMainProps {
  fetchMints: () => void
  fetchContent: (data: IFetch) => void
  setSelectedMint: (campaignId: string) => void
  mints: IMint[]
  docs: IDoc[]
  selectedMint: string
  totalDocs: number
}

const Main: React.FC<IMainProps> = ({ fetchMints, fetchContent, setSelectedMint, mints, docs, totalDocs }: IMainProps) => {
  const [mintName, setMintName] = useState<string>('')
  const [showMore, setShowMore] = useState<boolean>(false)
  const [offset, setOffset] = useState<boolean>(false)
  const { campaign } = useParams()

  useEffect(() => {
    fetchMints()
  }, [fetchMints])

  useEffect(() => {
    const mint = _.find(mints, { 'slug': campaign })
    if (mint) {
      if (mint?.name !== mintName) {
        fetchContent({ campaignId: mint.campaignId, offset: 0 })
        setSelectedMint(mint._id)
        setMintName(mint.name)
        setOffset(false)
      }
      totalDocs > docs.length ? setShowMore(true) : setShowMore(false)
    }
  }, [fetchMints, fetchContent, setSelectedMint, setMintName, campaign, mints, totalDocs, docs.length, mintName, offset])

  const handleShowMore = () => {
    const mint = _.find(mints, { 'slug': campaign })
    if (totalDocs > docs.length && mint) {
      setOffset(true)
      fetchContent({ campaignId: mint.campaignId, offset: docs.length })
    }
  }

  return (
    <div className="main-wrapper">
      <SideBar mints={mints} />
      <Content docs={docs} mintName={mintName} showMore={showMore} handleShowMore={handleShowMore} />
    </div>
  )
}

const mapStateToProps = (state: IAppState) => {
  return {
    mints: state.global.mints,
    docs: state.global.content,
    totalDocs: state.global.totalDocs
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchMints: () => fetchMints(dispatch),
    fetchContent: (data: IFetch) => fetchContent(dispatch, data),
    setSelectedMint: (campaignId: string) => setSelectedMint(dispatch, campaignId)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
