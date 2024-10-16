import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebAppSDK from '@twa-dev/sdk';
import "../styles/Main.css";

declare global {
  interface Window {
      Telegram?: any;
  }
}

const Main = () => {
  const [isTg, setIsTg] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleGameClick = () => {
    navigate('/games'); 
  };

  const handleTasksClick = () => {
    navigate('/tasks'); 
  };

  const handleInviteClick = () => {
    navigate('/invite'); 
  };

  const handleWallClick = () => {
    navigate('/wall'); 
  };

  useEffect(() => {
    const isTgCheck = Boolean(window.Telegram?.WebApp?.initData);
    
    if (isTgCheck) {
        WebAppSDK.ready();
        WebAppSDK.enableClosingConfirmation();
        WebAppSDK.expand();
        WebAppSDK.headerColor = "#313233";
        setIsTg(true);

        document.body.style.backgroundColor = 'var(--tg-theme-bg-color)';
        document.body.style.setProperty('background-color', '#ededed', 'important');
    } 
  }, []);

  return (
    <>
        {!isTg ? (
            <div className="denied-container">
                
            </div>
        ) : (
            <div className="tg-container">
              <div className="main-text">
                <h1>Major Test</h1>
              </div>
                
              <div className="button-panel">
                <div className="button" onClick={handleTasksClick}>
                    <span className="icon">⚡</span>
                    <span className="badge">11</span>
                    <span className="label">Earn</span>
                </div>
                <div className="button" onClick={handleGameClick}>
                    <span className="icon">🏆</span>
                    <span className="badge">4</span>
                    <span className="label">Games</span>
                </div>
                <div className="button" onClick={handleBackClick}>
                    <span className="icon">⭐</span>
                    <span className="label">Top</span>
                </div>
                <div className="button" onClick={handleInviteClick}>
                    <span className="icon">🔗</span>
                    <span className="label">Invite</span>
                </div>
                <div className="button" onClick={handleWallClick}>
                    <span className="icon">🌟</span>
                    <span className="label">Wall</span>
                </div>
            </div>

            </div>
        )}
    </>
  );
    
}

export default Main;
