import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { Auth } from './components/auth/Auth';
import { GoogleLogin } from './components/auth/GoogleLogin';
import { Game } from './components/app/Game';
import { AppConfig } from './config/config';

initializeApp(AppConfig.firebaseConfig);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Auth>
              <Game />
            </Auth>
          }
        />
        <Route path="/login" element={<GoogleLogin />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}