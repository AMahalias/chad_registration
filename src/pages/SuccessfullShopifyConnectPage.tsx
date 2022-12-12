import React from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Sidebar } from '../components/Sidebar';
import '../styles/customStyles.scss';

type Props = {
  storeName: string;
};

export const SuccessfullShopifyConnectPage: React.FC<Props> = ({ storeName }) => {
  return (
    <>
      <Sidebar />

      <Container>
        <div className="shop_logo_ready" />
        <div className="connect-shopify_title">Store connected</div>

        <div className="connect-shopify_text">
          Chad is now able to manage customer support requests for {storeName}.
        </div>

        <Button 
          buttonLink='/google'
          buttonTitle='Continue'
          underButtonText='Not your store?'
          underButtonLink='/shopify'
          underButtonTitle='Connect another one'
        />
      </Container>
    </>
  );
};
