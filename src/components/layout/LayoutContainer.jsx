import React from 'react'
import styled from 'styled-components'

const LayoutContainer = ({ isGridLayout = true, children, ...otherProps }) => {
  if (isGridLayout) {
    return (
      <GridContainer {...otherProps}>
        {children}
      </GridContainer>
    )
  }

  return (
    <Container>
      {children}
    </Container>
  )
}

export default LayoutContainer

const Container = styled.div`
  max-width: 960px;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  @media screen and (min-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const GridContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 576px){
    grid-template-columns: repeat(2,1fr);
    align-items: center;
  }
`
