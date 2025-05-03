
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
