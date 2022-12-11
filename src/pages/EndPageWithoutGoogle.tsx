import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { TitleBlock } from "../components/TitleBlock";

export const EndPageWithoutGoogle = () => (
 <Container>
    <div className="image_done" />

    <TitleBlock 
      title='Response received' 
      text={`Thank you for your interest in Chad! We'll be hard at work building integrations to support your email client.`}
    />

    <Button buttonTitle="Done" buttonLink="/" underButtonLink="" underButtonTitle="" />
 </Container>
);