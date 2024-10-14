import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebAppSDK from '@twa-dev/sdk';
import "../styles/Games.css";
import { BackButton } from '../webapp/BackButton';

declare global {
  interface Window {
      Telegram?: any;
  }
}

const Games = () => {
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
                <div className="game-img">
                  <h1>⭐</h1>
                </div>

                <div className="game-text">
                  <h1>Games</h1>
                  <p>Collect free rewards every day</p>
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

              <div className="container">
                  <div className="rectangle"></div>
                  {/* <div className="durov-img">
                    <img src={HoldBG} alt="Game Icon" />
                  </div> */}
                  
              </div>



              <BackButton />
                
            </div>
        )}
    </>
  );

};

export default Games;
