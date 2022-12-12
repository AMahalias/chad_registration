import React, { useEffect } from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { ErrorDisconnected } from '../components/ErrorDisconnected';
import { ErrorShopify } from '../components/ErrorShopify';
import { List } from '../components/List';
import { LoadingPage } from '../components/LoadingPage';
import { Logo } from '../components/Logo';
import { Sidebar } from '../components/Sidebar';
import { TitleBlock } from '../components/TitleBlock';
import { shopifyList } from '../texts/textForLists';
import { shopifyPage } from '../texts/textsForMainTitles';

type Props = {
  name: string;
  isLoading: boolean;
  isError: boolean;
  getShopifyStore: (name: string) => Promise<void>;
  isErrorDisconnected: boolean;
};

export const ShopifyPage: React.FC<Props> = ({ 
  name, 
  isLoading,
  isError,
  getShopifyStore,
  isErrorDisconnected,
}) => {

  useEffect (() => {
    if (!isLoading && isError) {
    setTimeout(() => {
      <ErrorShopify />
     }, 5000);
    };

    if (!isLoading && isErrorDisconnected) {
      setTimeout(() => {
        <ErrorDisconnected />
      }, 5000)
    }
  }, [isLoading, isError, isErrorDisconnected])

  return (
    <>
      <Sidebar />
      {isLoading ? (<LoadingPage />) : (
        <Container>
          <Logo />
          <TitleBlock title={shopifyPage.title} text={shopifyPage.paragraph}/>
          
          <List list={shopifyList} />

          <Button 
            buttonLink='connectShopify'
            buttonOnClick={() => getShopifyStore(name)}
            buttonTitle='Connect Shopify store'
            underButtonLink='/not-shopify'
            underButtonTitle={`I don't use Shopify`}
          />
        </Container>
      )} 
    </>
  );
};
