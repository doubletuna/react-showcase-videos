import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../../Redux/app.state'
import { fetchMints, fetchContent, setSelectedMint } from '../../Redux/global/global.actions'
import { IMint, IDoc } from '../../Interfaces/interfaces'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import './Main.scss'

interface IMainProps {
  fetchMints: () => void
  fetchContent: (campaignId: string) => void
  setSelectedMint: (campaignId: string) => void
  mints: IMint[]
  docs: IDoc[]
  selectedMint: string
}

const Main: React.FC<IMainProps> = ({ fetchMints, fetchContent, setSelectedMint, mints, docs }: IMainProps) => {
  const [mintName, setMintName] = useState<string>('')
  const { campaign } = useParams()

  useEffect(() => {
    fetchMints()
  }, [fetchMints])

  useEffect(() => {
    const mint = _.find(mints, { 'slug': campaign })
    if (mint) {
      fetchContent(mint.campaignId)
      setSelectedMint(mint._id)
      setMintName(mint.name)
    }

  }, [fetchMints, fetchContent, setSelectedMint, setMintName, campaign, mints])

  return (
    <div className="main-wrapper">
      <SideBar mints={mints} />
      <Content docs={docs} mintName={mintName} />
    </div>
  )
}

const mapStateToProps = (state: IAppState) => {
  return {
    mints: state.global.mints,
    docs: state.global.content.docs
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchMints: () => fetchMints(dispatch),
    fetchContent: (campaignId: string) => fetchContent(dispatch, campaignId),
    setSelectedMint: (campaignId: string) => setSelectedMint(dispatch, campaignId)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
