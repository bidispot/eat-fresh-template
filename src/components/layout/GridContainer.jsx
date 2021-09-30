import React from 'react'
import styled from 'styled-components'

const GridContainer = ({ children, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      {children}
    </Container>
  )
}

export default GridContainer

const Container = styled.div`
  display: grid;
  gap: 1.5rem;
  row-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  
  @media screen and (min-width: 768px) {
    margin-top: var(--mb-6);
  }
`
