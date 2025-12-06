import React from 'react';
// 💡 Asegúrate de que estos logos (SignUpLogo, GoogleLogo) estén disponibles en constants
import { SignUpLogo, GoogleLogo } from '../constants'; 

const Login: React.FC = () => {
  return (
    // 💡 Ajuste 1: Aplicamos el color de fondo global de Linear y ocupamos la altura mínima
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0B0B0F] text-white"> 
      
      <div className="w-full max-w-sm text-center">
        <SignUpLogo className="mx-auto mb-8 h-8 w-auto" />
        
        {/* Título */}
        <h1 className="text-3xl font-bold text-white mb-8">
          Log in to Linear
        </h1>
        
        <div className="space-y-3">
          {/* Botón 1: Google (Primario - Usamos el color de acento índigo de Linear) */}
          <button 
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
          >
            {/* Si GoogleLogo es un icono, lo renderizamos aquí */}
            {/* <GoogleLogo className="h-5 w-5" /> */} 
            Continue with Google
          </button>
          
          {/* Botón 2: Email (Secundario - Estilo sutil y con borde) */}
          <button 
            className="w-full bg-[#171719] hover:bg-[#252528] border border-white/10 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors"
          >
            Continue with email
          </button>
          
          {/* Botón 3: SAML SSO (Secundario) */}
          <button 
            className="w-full bg-[#171719] hover:bg-[#252528] border border-white/10 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors"
          >
            Continue with SAML SSO
          </button>

          {/* Botón 4: Passkey (Secundario) */}
          <button 
            className="w-full bg-[#171719] hover:bg-[#252528] border border-white/10 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors"
          >
            Log in with passkey
          </button>
        </div>
        
        {/* Enlace de Registro/Información */}
        <p className="text-sm text-gray-500 mt-8">
          Don't have an account? <a href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium underline transition-colors">Sign up</a> or <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium underline transition-colors">learn more</a>
        </p>
      </div>
    </div>
  );
};

export default Login;