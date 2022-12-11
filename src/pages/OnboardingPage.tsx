import { FC } from 'react';
import { Button } from '../components/Button';
import { TitleBlock } from '../components/TitleBlock';

export const OnboardingPage: FC = () => (
  <div className="onboarding_background">
    <div className="modal">
      <TitleBlock title={`You're ready to go! 🚀`} />
      <div className="text">
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
  </div>
);
