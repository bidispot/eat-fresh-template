import React from 'react'
import styled from 'styled-components'
import LayoutContainer from '../../components/layout/LayoutContainer'
import Button from '../../components/button/Button'
import { DISCOVER } from './constants'

const Home = () => {
  return (
    <section id="home">
      <HomeContainer>
        <div>
          <HomeTitle>Eat Fresh</HomeTitle>
          <HomeSubTitle>Everyday <br/> something amazing</HomeSubTitle>
          <Button>{DISCOVER}</Button>
        </div>
        <HomeImg src="/assets/img/home.png" alt="" />
      </HomeContainer>
    </section>
  )
}

export default Home

const HomeContainer = styled(LayoutContainer)`
  height: calc(700px - var(--header-height));
  align-content: center;
  justify-items: center;
  
  @media screen and (min-width: 576px){
    grid-template-columns: repeat(2,1fr);
    justify-items: initial;
  }
  
  @media screen and (min-height: 721px) {
    max-height: 700px;
  }

  @media screen and (min-width: 768px){
    justify-items: center;
  }
`

const HomeTitle = styled.h1`
  font-size: var(--bigger-font-size);
  color: var(--primary-color);
  margin-bottom: var(--mb-1);
`

const HomeSubTitle = styled.h2`
  font-size: var(--h1-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-4);
`

const HomeImg = styled.img`
  width: 300px;
  border-radius: .5rem;
  justify-self: center;

  @media screen and (min-width: 576px) {
    width: 550px;
  }
`
