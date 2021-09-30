import React from 'react'
import styled from 'styled-components'

const SectionSubTitle = ({ children, isInitial }) =>
  <Container isInitial={isInitial}>
    {children}
  </Container>

export default SectionSubTitle

const Container = styled.span`
  display: block;
  color: var(--primary-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1);
  text-align: center;

  @media screen and (min-width: 576px) {
    ${({isInitial}) => isInitial && `text-align: initial;`}
  }
`
