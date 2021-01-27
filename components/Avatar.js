import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://share.getcloudapp.com/X6u9WN02",
  };

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image``;
