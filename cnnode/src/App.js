import React from 'react';
import RouteList from './routes';
import Header from './component/Header';
import "./static/less/index.less";
function App() {
  return (
    <div>
        <Header />
        <RouteList />  
    </div>
  );
}

export default App;
