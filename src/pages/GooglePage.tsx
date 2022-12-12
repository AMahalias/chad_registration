import { FC } from 'react';
import { Container } from '../components/Container';
import { GoogleButton } from '../components/GoogleButton';
import { List } from '../components/List';
import { Logo } from '../components/Logo';
import { Sidebar } from '../components/Sidebar';
import { TitleBlock } from '../components/TitleBlock';
import { googleList } from '../texts/textForLists';

export const mainText = 'Allows Chad to send automated rote responses on your behalf, ' +
`for instance to confirm that a customer's missing item complaint is being evaluated.`

export const GooglePage: FC = () => (
  <>
    <Sidebar />

    <Container>
      <Logo />

      <TitleBlock title={'Connect your customer support email'} text={mainText} />

      <List list={googleList} />

      <GoogleButton />

    </Container>
  </>
); 
