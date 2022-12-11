import React from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { TitleBlock } from '../components/TitleBlock';
import '../styles/customStyles.scss';

type Props = {
  storeName: string;
};

export const SuccessfullShopifyConnectPage: React.FC<Props> = ({ storeName }) => {
  return (
    <Container>
      <div className="shop_logo_ready" />
      <TitleBlock 
        title='Store connected'
        text={'Smiling raccoon has been successfully connected to Chad. Find out more in the dashboard'} 
      />

      <Button 
        buttonLink='/google'
        buttonTitle='Continue'
        underButtonText='Not your store?'
        underButtonLink='/shopify'
        underButtonTitle='Connect another one'
      />
    </Container>
  );
};
