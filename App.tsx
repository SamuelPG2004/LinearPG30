// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de Layout
import Header from './components/Header';
import LandingPage from './components/LandingPage'; 
import SignUp from './components/SignUp'; // Página de registro
import Login from './components/Login'; // 💡 IMPORTACIÓN NECESARIA

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased relative overflow-x-hidden">
      {/* Fondo estático de la aplicación */}
      <div className="absolute top-0 left-0 w-full h-full z-[-10] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <BrowserRouter>
        
        {/* El Header es visible en TODAS las rutas */}
        <Header /> 

        <Routes>
          
          {/* RUTA HOME */}
          <Route path="/" element={<LandingPage />} /> 
          
          {/* RUTA SIGNUP */}
          <Route path="/signup" element={<SignUp />} />

          {/* 💡 AÑADIMOS LA RUTA LOGIN */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;