import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import { Navbar } from './pages/Public/Navbar';

function App() {

  const [isAdminPanel,getIsAdminPanel]=useState(true);

  return (
    <BrowserRouter>
      {isAdminPanel ? <Navbar /> : null}
      <Main getIsAdminPanel={getIsAdminPanel} />
    </BrowserRouter>
  );
}

export default App;
