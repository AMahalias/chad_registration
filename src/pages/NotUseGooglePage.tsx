import React from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { SelectPlatform } from '../components/SelectPlatform';
import { TitleBlock } from '../components/TitleBlock';
import { notGoogle } from '../texts/textsForMainTitles';
import { Sidebar } from '../components/Sidebar';

export const listOptions = ['Microsoft Outlook', 'Yahoo', 'Other'];

export const NotUseGooglePage: React.FC = () => {
  return (
    <>
      <Sidebar />

      <Container>
        <Logo />

        <TitleBlock title={notGoogle.title} text={notGoogle.paragraph}/>

        <SelectPlatform list={listOptions} />
        
        <Button
          buttonLink='/end'
          buttonTitle='Submit'
          underButtonText='Actually use Shopify?'
          underButtonLink='/shopify'
          underButtonTitle='Connect'
        />
      </Container>
    </>
  );
};