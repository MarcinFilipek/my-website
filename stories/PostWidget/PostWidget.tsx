import React from "react";
import { Container, Description, Title } from "./styles";
type Props = {
  title: string;
};

export const PostWidget = ({ title }: Props) => (
  <Container>
    <Title variant="h6" data-testid="title">
      {title}
    </Title>
    <Description variant="body2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Description>
  </Container>
);
