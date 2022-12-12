import React from 'react';
import { Button } from '../Button';
import { TitleBlock } from '../TitleBlock';

export const ModalCard: React.FC = () => {
  return (
    <div className="modal">
      <TitleBlock title={`You're ready to go! 🚀`} />
      <div className="modal_text">
        A fully loaded self-service portal is now ready to deploy on your Shopify store. 
        <br/>
        We&#39;ve programmed it to follow industry best practices for shipping, return & exchange, and payment policy.
        <br/>
        You can customize these settings to fit your store policy anytime.
        <br/>
        Lastly, <strong>nothing is live until you hit “Go Live”!</strong>
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
