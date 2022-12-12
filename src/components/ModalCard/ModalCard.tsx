import React from 'react';
import { Button } from '../Button';
import { TitleBlock } from '../TitleBlock';
import './modalCard.scss';

export const ModalCard: React.FC = () => {
  return (
    <div className="modal modal-dialog modal-dialog-centered">
      <TitleBlock title={`You're ready to go! 🚀`} />
      <div className="modal_text">
        <p>
          A fully loaded self-service portal is now 
          ready to deploy on your Shopify store.
        </p> 

        <p>
          We&#39;ve programmed it to follow industry 
          best practices for shipping, return & exchange, 
          and payment policy.
        </p>
        
        <p>
          You can customize these settings to fit your store policy anytime.
        </p>
        <p>
          Lastly, <strong>nothing is live until you hit “Go Live”!</strong>
        </p> 
      </div>

      <Button 
        buttonTitle='Start customizing' 
        buttonLink='/'
        underButtonLink=''
        underButtonTitle=''
      />
    </div>
  );
};
