import { Navigation } from "../../stories";
import {
  Container,
  Content,
  FixedBackground,
  NavigationContainer,
} from "./styles";

export const Layout = ({ children }) => {
  const navItems = [
    { id: 0, text: "Home", href: "/" },
    { id: 1, text: "Blog", href: "/blog" },
    { id: 2, text: "O mnie", href: "/about" },
  ];
  return (
    <>
      <FixedBackground />
      <NavigationContainer>
        <Navigation navItems={navItems} />
      </NavigationContainer>
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
};
