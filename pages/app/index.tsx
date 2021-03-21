import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Header } from '../../components/Header/Header'
import Web3ReactManager from '../../components/Web3ReactManager';
import UnderConstruction from './underconstruction';
import { DashboardWrapper, Background } from '../../utils/theme';
import Lend from './lend';
import Dashboard from './dashboard';
import Borrow from './borrow';
import Auction from './auction';
import Appraise from './appraise';
import Deposit from './deposit';
import BorrowNoCollateral from './borrowNoCollateral';
import Repay from './repay';
import Repaid from './repaid';
import FAQ from './faq';

export default function() {
  return (
    <App />
  )
}

function App() {
  return (
    <>
      <Web3ReactManager>
        <BrowserRouter>
          <Header/>
          <DashboardWrapper>
            <Background/>
            <Switch>
              <Route exact path="/app/dashboard" component={Dashboard} />
              <Route exact path="/app/lend" component={Lend} />
              <Route exact path="/app/borrow" component={Borrow} />
              <Route exact path="/app/borrowNoCollateral" component={BorrowNoCollateral} />
              <Route exact path="/app/repay" component={Repay} />
              <Route exact path="/app/repaid" component={Repaid} />
              <Route exact path="/app/deposit" component={Deposit} />
              <Route exact path="/app/auction" component={Auction} />
              <Route exact path="/app/appraise" component={Appraise} />
              <Route exact path="/app/faq" component={FAQ} />
              <Route exact path="/app/underconstruction" component={UnderConstruction} />
              <Redirect to="/app/dashboard" />
            </Switch>
          </DashboardWrapper>
        </BrowserRouter>
      </Web3ReactManager>
    </>
  )
}