import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

export const GoogleLogin: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        console.log('error=', error);
        setAuthing(false);
      });
  };

  const skipSignIn = () => {
    navigate('/game');
  };

  return (
    <div className="login-page-container">
      <p>Login to the game</p>
      <button className="login-button" onClick={() => signInWithGoogle()} disabled={authing}>
        Sign in with Google
      </button>
      <button className="skip-button" onClick={() => skipSignIn()} disabled={authing}>
        Skip login
      </button>
    </div>
  );
};
