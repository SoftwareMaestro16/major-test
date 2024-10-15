import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebAppSDK from '@twa-dev/sdk';
import "../styles/Games.css";
import { BackButton } from '../webapp/BackButton';
import HoldBG from '../assets/HoldBG.jpg';

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

              <div className="container-puzzle">
                  <div className="rectangle-puzzle">
                    <div className="game-item">
                      <div className="durov-img">
                          <img src={HoldBG} alt="Game Icon" />
                        </div>
                        <div className="durov-text">
                          <h2 className="durov-name">Puzzle Durov</h2>
                          <h3 className="durov-reward">+5,000<span>⭐</span> </h3>
                        </div>
                        <div className="durov-new">
                          <h3 className="durov-new-text">NEW</h3>
                        </div>
                        <button className="durov-play">Play</button>
                    </div>
              
                  </div>
                  
              </div>

              <div className="container-mini-games">
                <div className="rectangle-mini-games">
                    <div className="game-item">
                        <div className="hold-img">
                            <img src={HoldBG} alt="Game Icon" />
                        </div>
                        <div className="hold-text">
                            <h2 className="hold-name">Hold Coin</h2>
                            <h3 className="hold-reward">+915<span>⭐</span> </h3>
                        </div>
                        <button className="hold-play">Play</button>
                    </div>

                    <div className="game-item">
                        <div className="roulette-img">
                            <img src={HoldBG} alt="Game Icon" />
                        </div>
                        <div className="roulette-text">
                            <h2 className="roulette-name">Roulette</h2>
                            <h3 className="roulette-reward">+10,000<span>⭐</span> </h3>
                        </div>
                        <button className="roulette-play">Play</button>
                    </div>

                    <div className="game-item">
                        <div className="swipe-img">
                            <img src={HoldBG} alt="Game Icon" />
                        </div>
                        <div className="swipe-text">
                            <h2 className="swipe-name">Swipe Coin</h2>
                            <h3 className="swipe-reward">+3,000<span>⭐</span> </h3>
                        </div>
                        <button className="swipe-play">Play</button>
                        </div>
                    </div>
                </div>
                <p className="about-games">Maximum possible rating points that can be earned per one game session.</p>
                

              <BackButton />
                
            </div>
        )}
    </>
  );

};

export default Games;
