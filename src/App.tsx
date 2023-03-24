import React from 'react';
import { useRoutes} from 'react-router-dom'
import  indexRouter from './router'

function App() {
  const RouteList=useRoutes(indexRouter)
  return (
    <div className="App">
      {RouteList}
    </div>
  );
}

export default App;
