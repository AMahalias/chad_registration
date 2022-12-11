import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navPages } from '../../texts/textsForMainTitles';
import './sidebar.scss';

export const buttonsId = ['1', '2', '3', '4', '5'];

export const Sidebar: React.FC = () => {
  const [isDisabledLeft, setIsDisabledLeft] = useState(false);
  const [isDisabledRight, setIsDisabledRight] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState('');

  console.log(location.pathname);

  const handleStepPrev = () => {
    if (window.history.length === 0 || location.pathname === '/') {
      setIsDisabledLeft(true);
      return;
    }
    
    window.history.back();
  };

  const handleStepNext = () => {
    if (window.history.length === 0 || location.pathname === '/end') {
      setIsDisabledRight(true);
      return;
    }
    
    window.history.forward();
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        return setActivePage('Welcome');
      case '/shopify':
        return setActivePage('Connect your Shopify store')
    }
  }, [location.pathname, activePage])

  return (
    <div className="sidebar">
      <nav className="sidebar_nav nav flex-column">
        {navPages.map(({ namePage, linkPage }) => {
          return (
            <div 
              className={classNames('nav_item', { 
                'is-active': location.pathname.includes(linkPage) 
              })} 
              key={namePage}
            >
              <>
                {namePage === 'Done'
                ? <div className="nav_circle last" />
                : <div className={classNames('nav_circle', { 'is-active': location.pathname.includes(linkPage) })} />
                }
                {namePage}
              </>
            </div>
          )
        })}
      </nav>

      <div className="sidebar_buttons">
        <button onClick={handleStepPrev} className="button-prev" disabled={isDisabledLeft}>&lt; Prev</button>
        <button onClick={handleStepNext} className="button-next" disabled={isDisabledRight}>Next &gt;</button>
      </div>
      
      <div className="sidebar_slider slider">
        <div className="slider_left">5X</div>
        <div className="slider_right">
          Acquiring a new customer is 5x more costly than making an unhappy customer happy
        </div>
      </div>
      
      <div className="slider_buttons">
        {buttonsId.map(id => {
          if (id === '1') {
            return (
              <div className="slider_radioButton is-active" key={id} />
            )
          } else {
            return (
              <div className="slider_radioButton" key={id} />
            )
          }
        })}
      </div>
    </div>
  );
};
