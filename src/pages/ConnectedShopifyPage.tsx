/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Sidebar } from '../components/Sidebar';

type Props = {
  setIsErrorDisconnected: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ConnectedShopifyPage: FC<Props> = ({ 
  setIsErrorDisconnected 
}) => {

  const onClickFunction = () => {
    setIsErrorDisconnected(true);
  };

  return (
    <>
      <Sidebar />

      <Container>
        <div className="shop_logo" />

        <div className="connect-shopify_title">Store connected</div>

        <div className="connect-shopify_text">
          Smiling raccoon has been successfully connected to Chad. Find out more in the dashboard
        </div>
        
        <Button
          buttonLink='success-connection'
          buttonTitle='Continue'
          underButtonText='Wrong store?'
          underButtonLink='disconnectPage'
          underButtonTitle='Connect another one'
          underButtonOnClick={() => onClickFunction}
        />
      </Container>
    </>
    
  );
};
