/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { TitleBlock } from '../components/TitleBlock';

type Props = {
  storeName: string;
  setIsErrorDisconnected: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ConnectedShopifyPage: FC<Props> = ({ 
  storeName, 
  setIsErrorDisconnected 
}) => {

  const onClickFunction = () => {
    setIsErrorDisconnected(true);
  };

  return (
    <Container>
      <div className="shop_logo" />
      <TitleBlock title="Store connected" text={`Chad is now able to manage customer support requests for ${storeName}.`} />
      
      <Button
        buttonLink='success-connection'
        buttonTitle='Continue'
        underButtonText='Wrong store?'
        underButtonLink='disconnectPage'
        underButtonTitle='Connect another one'
        underButtonOnClick={() => onClickFunction}
      />
    </Container>
  );
};
