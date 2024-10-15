import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebAppSDK from '@twa-dev/sdk';
import "../styles/Invite.css";
import { BackButton } from '../webapp/BackButton';

declare global {
  interface Window {
      Telegram?: any;
  }
}

const Invite = () => {
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
                <div className="invite-img">
                  <h1>⭐</h1>
                </div>

                <div className="invite-text">
                  <h1>Invite friends</h1>
                  <p>You and your friend will receive bonuses
                  for invitation. How it works?</p>
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

            <div className="container-invite">
                  <div className="rectangle-invite">
                      
                  </div>
                  
              </div>

            <BackButton />

            </div>
        )}
    </>
  );
    
}

export default Invite;
