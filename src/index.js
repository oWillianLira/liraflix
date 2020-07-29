import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home'

const NotFound = () => (
  <div>
    <h2>Not Found 404</h2>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);
