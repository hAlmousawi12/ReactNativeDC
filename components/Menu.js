import React from "react";
import styled from "styled-components";
import { Animated } from "react-native";

class Menu extends React.Component {
  render() {
    return (
      <Container>
        <Cover />
        <Content />
      </Container>
    );
  }
}

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;
