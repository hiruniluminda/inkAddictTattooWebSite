import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Japaneesetattoo from './components/pages/japaneesetattoo';
import Maori from './components/pages/maori';
import Ornamental from './components/pages/Ornamental';
import Polynesian from './components/pages/Polynesian';
import Upcoming from "./components/upcoming";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/japaneesetattoo" element={<Japaneesetattoo />} />
        <Route path="/maori" element={<Maori />} />
        <Route path="/ornamental" element={<Ornamental />} />
        <Route path="/polynesian" element={<Polynesian />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
  </BrowserRouter>

);
reportWebVitals();
