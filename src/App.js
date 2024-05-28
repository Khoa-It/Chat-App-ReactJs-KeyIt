import { Route, Routes } from 'react-router-dom';
import './css/style.css'
import ChatPage from './pages/ChatPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/chat' element={<ChatPage />} />
    </Routes>
  );
}

export default App;
