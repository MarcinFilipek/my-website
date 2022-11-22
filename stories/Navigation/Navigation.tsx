import React from "react";
import { NavItems } from "./types";
import { Container, StyledUl, StyledLink, StyledTypography } from "./styles";

type Props = {
  navItems: NavItems;
};

export const Navigation = ({ navItems }: Props) => (
  <Container>
    <StyledUl>
      {navItems.map((navItem) => (
        <li key={navItem.id}>
          <StyledLink href={navItem.href}>
            <StyledTypography
              variant="body1"
              data-testid={`nav-item-${navItem.id}`}
            >
              {navItem.text}
            </StyledTypography>
          </StyledLink>
        </li>
      ))}
    </StyledUl>
  </Container>
);
