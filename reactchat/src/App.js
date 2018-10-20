import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from './components/main/index';
import './App.css';

export default () => (
    <HashRouter>
      <div>
        <Route exact={true} path="/" component={Main} />


      </div>
    </HashRouter>
);
