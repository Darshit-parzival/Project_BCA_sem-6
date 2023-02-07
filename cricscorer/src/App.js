import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import { Navbar } from './pages/Public/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Main />
    </BrowserRouter>
  );
}

export default App;
