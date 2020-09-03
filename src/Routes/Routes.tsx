import React from 'react'
import Main from '../Components/Main/Main'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';

export const Routes: React.FC = () => {
  return (
    <div className="router-wrapper">
      <HashRouter>
        <Switch>
          <Route path="/mints/:campaign" component={Main} />
          <Redirect from="/" to="/mints/new-in" />
        </Switch>
      </HashRouter>
    </div>
  )
}