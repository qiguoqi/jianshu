import React from 'react';
import Header from './common/header';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/write' exact component={Write} />
        <Route path='/detail/:id' exact component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
