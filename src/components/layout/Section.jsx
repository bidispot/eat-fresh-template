import React from 'react'
import styled from 'styled-components'

const Section = ({ children, ...otherProps }) =>
  <Container {...otherProps} >
    {children}
  </Container>

export default Section

const Container = styled.section`
  padding: 4rem 0 2rem;

  @media screen and (min-width: 576px) {
    padding-top: 12rem;
  }

  @media screen and (min-width: 768px){
    padding-top: 12rem;
  }
`
