import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({ children, isInitial }) =>
  <Container isInitial={isInitial}>
    {children}
  </Container>

export default SectionTitle

const Container = styled.h2`
  display: block;
  font-size: var(--h1-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-3);
  text-align: center;
  
  @media screen and (min-width: 576px){
    ${({ isInitial }) => isInitial && `text-align: initial;`}
  }
`
