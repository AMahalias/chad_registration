import React from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { ErrorDisconnected } from '../components/ErrorDisconnected';
import { ErrorShopify } from '../components/ErrorShopify';
import { List } from '../components/List';
import { Logo } from '../components/Logo';
import { Sidebar } from '../components/Sidebar';
import { TitleBlock } from '../components/TitleBlock';
import { shopifyList } from '../texts/textForLists';
import { shopifyPage } from '../texts/textsForMainTitles';

type Props = {
  name: string;
  isError: boolean;
  getShopifyStore: (name: string) => Promise<void>;
  isErrorDisconnected: boolean;
};

export const ShopifyPage: React.FC<Props> = ({ 
  name, 
  isError,
  getShopifyStore,
  isErrorDisconnected,
}) => {
  return (
    <>
      <Sidebar />

      {isError && <ErrorShopify />}
      {isErrorDisconnected && <ErrorDisconnected />}

      <Container>
        <Logo />
        <TitleBlock title={shopifyPage.title} text={shopifyPage.paragraph}/>
        
        <List list={shopifyList} />

        <Button 
          buttonLink='loading-shopify'
          buttonOnClick={() => getShopifyStore(name)}
          buttonTitle='Connect Shopify store'
          underButtonLink='/not-shopify'
          underButtonTitle={`I don't use Shopify`}
        />
      </Container>
    </>
  );
};
