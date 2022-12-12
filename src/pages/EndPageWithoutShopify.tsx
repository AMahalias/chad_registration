import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Sidebar } from "../components/Sidebar";
import { TitleBlock } from "../components/TitleBlock";

export const EndPageWithoutShopify = () => (
  <>
    <Sidebar />

    <Container>
      <div className="image_done" />

      <TitleBlock 
        title='Response received' 
        text={`Thank you for your interest in Chad! We'll be hard at work building integrations to support your platform.`}
      />

      <Button buttonTitle="Done" buttonLink="/" underButtonLink="" underButtonTitle="" />
    </Container>
  </>
);