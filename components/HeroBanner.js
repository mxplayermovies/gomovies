import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: white;
`;

const HeroBanner = ({ src, title }) => {
  return (
    <Container src={src}>
      <Title>{title}</Title>
    </Container>
  );
};

export default HeroBanner;
