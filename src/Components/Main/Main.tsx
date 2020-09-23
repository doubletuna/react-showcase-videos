import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../../Redux/app.state'
import { fetchMints, fetchMockContent, setSelectedMint } from '../../Redux/global/global.actions'
import { IMint, IDoc, IFetch } from '../../Interfaces/interfaces'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import './Main.scss'

interface IMainProps {
  fetchMints: () => void
  fetchMockContent: (data: IFetch) => void
  setSelectedMint: (campaignId: string) => void
  mints: IMint[]
  docs: IDoc[]
  selectedMint: string
  totalDocs: number
}

const Main: React.FC<IMainProps> = ({ fetchMints, fetchMockContent, setSelectedMint, mints, docs, totalDocs }: IMainProps) => {
  const [mintName, setMintName] = useState<string>('')
  const [showMore, setShowMore] = useState<boolean>(false)
  const [offset, setOffset] = useState<boolean>(false)
  const { campaign }: any = useParams()

  useEffect(() => {
    fetchMints()
  }, [fetchMints])

  useEffect(() => {
    
    const mint = _.find(mints, { 'slug': campaign })
    if (mint) {
      if (mint?.name !== mintName) {
        fetchMockContent({ campaignId: mint.campaignId, offset: 0 })
        setSelectedMint(mint._id)
        setMintName(mint.name)
        setOffset(false)
      }      
      totalDocs > docs.length ? setShowMore(true) : setShowMore(false)
    }
  }, [fetchMockContent, setSelectedMint, setMintName, campaign, mints, totalDocs, docs, mintName, offset])

  const handleShowMore = () => {
    const mint = _.find(mints, { 'slug': campaign })
    if (totalDocs > docs.length && mint) {
      setOffset(true)
      fetchMockContent({ campaignId: mint.campaignId, offset: docs.length })
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
    fetchMockContent: (data: IFetch) => fetchMockContent(dispatch, data),
    setSelectedMint: (campaignId: string) => setSelectedMint(dispatch, campaignId)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
