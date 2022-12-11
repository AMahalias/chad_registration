import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { SelectPlatform } from '../components/SelectPlatform';
import { TitleBlock } from '../components/TitleBlock';
import { notShopify } from '../texts/textsForMainTitles';

export const listOptions = ['Salesforce', 'Ecwid', 'Other'];

export const NotUseShopifyPage: React.FC = () => {
  return (
    <Container>
      <Logo />

      <TitleBlock title={notShopify.title} text={notShopify.paragraph}/>

      <SelectPlatform list={listOptions} />

      <Button
        buttonLink='/end'
        buttonTitle='Submit'
        underButtonText='Actually use Shopify?'
        underButtonLink='/shopify'
        underButtonTitle='Connect'
      />
    </Container>
  );
};