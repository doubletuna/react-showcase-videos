import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IMint } from '../../Interfaces/interfaces'

import './SideBar.scss'

interface ISideBarProps {
  mints: IMint[]
}

const SideBar: React.FC<ISideBarProps> = ({ mints }: ISideBarProps) => {
  const [menuState, setMenuState] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <div className="sidebar-wrapper">
      {
        <div className="web-menu">
          {
            mints?.[0] && <div className="sidebar-header"><a className="home-link" href={`#/mints/${mints[0].slug}`} >mints</a></div>
          }
          {
            mints?.map((m: IMint) => {
              return <div key={m._id} className="mint-wrapper" >
                <NavLink exact className="mint" activeClassName="active" to={`/mints/${m.slug}`}># {m.name}</NavLink></div>
            })
          }
        </div>
      }
      {
        menuState && <div className="mobile-menu">
        {
          mints?.[0] && <div className="sidebar-header"><a className="home-link" href={`#/mints/${mints[0].slug}`} >mints</a></div>
        }
        {
          mints?.map((m: IMint) => {
            return <div key={m._id} className="mint-wrapper" >
              <NavLink exact className="mint" activeClassName="active" onClick={() => toggleMenu()} to={`/mints/${m.slug}`}># {m.name}</NavLink></div>
          })
        }
        <div key='sd5g6t7y0ol' className="close-mobile-menu" onClick={() => toggleMenu()}>---Close Menu---</div>
      </div>
    }
    {
      !menuState && <div className="minimized-menu" onClick={() => toggleMenu()}>
        <div className="splat"></div>
        <div className="splat"></div>
        <div className="splat"></div>
      </div>
    }
    </div>
  )
}

export default SideBar
