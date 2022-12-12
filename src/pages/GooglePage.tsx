import { FC } from 'react';
import { Container } from '../components/Container';
import { GoogleButton } from '../components/GoogleButton';
import { List } from '../components/List';
import { Logo } from '../components/Logo';
import { Sidebar } from '../components/Sidebar';
import { TitleBlock } from '../components/TitleBlock';
import { googleList } from '../texts/textForLists';
import { googlePage } from '../texts/textsForMainTitles';

export const GooglePage: FC = () => (
  <>
    <Sidebar />

    <Container>
      <Logo />

      <TitleBlock title={googlePage.title} text={googlePage.paragraph} />

      <List list={googleList} />

      <GoogleButton />

    </Container>
  </>
); 
